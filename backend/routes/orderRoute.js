import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder, verifyOrder } from "../controllers/OrderController.js";

const orderRouter = express.Router();

orderRouter.post("/placeorder", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);

export default orderRouter;
