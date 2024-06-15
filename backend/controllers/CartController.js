import userModel from "../models/userModel.js";

// add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    return res.json({ success: true, message: "Added to cart!" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Failed to Add to cart!" });
  }
};

// remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    return res.json({ success: true, message: "Item removed from cart!" });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Failed to remove item from cart!",
    });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);
    const cartData = await userData.cartData;

    return res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Failed to fetch cart data!",
    });
  }
};

export { addToCart, removeFromCart, getCart };
