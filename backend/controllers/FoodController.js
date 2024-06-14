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

export { addFood };
