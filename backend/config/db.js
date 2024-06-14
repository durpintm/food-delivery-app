import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://durpinthapa:dOVoCpYSOJUUtf7h@cluster0.sj9zaso.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("Database connected!");
    });
};
