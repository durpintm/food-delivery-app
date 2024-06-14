import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
  let image_fileName = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_fileName,
  });

  try {
    await food.save();
    return res.json({ success: true, message: "Food added!" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error adding food" });
  }
};

// list all food
const listFood = async (req, res) => {
  try {
    const foodList = await foodModel.find({});
    return res.json({ success: true, data: foodList });
  } catch (error) {
    console.log("Error getting food list");
    return res.json({ success: false, message: "Error getting food list" });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const foodItem = await foodModel.findById(req.body.id);
    if (foodItem) {
      fs.unlink(`uploads/${foodItem.image}`, () => {});
      await foodModel.findByIdAndDelete(req.body.id);
      return res.json({ success: true, message: "Food deleted successfully!" });
    }
    return res.json({
      success: false,
      message: "No Food found!",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error,
    });
  }
};

export { addFood, listFood, removeFood };
