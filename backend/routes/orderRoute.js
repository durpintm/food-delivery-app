import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  listOrders,
  placeOrder,
  updateOrderStatus,
  userOrders,
  verifyOrder,
} from "../controllers/OrderController.js";

const orderRouter = express.Router();

orderRouter.post("/placeorder", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);

// For admin panel
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateOrderStatus);

export default orderRouter;
