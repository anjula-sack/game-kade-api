import express from "express";
import { getShops, getShopById } from "../services/shop.service";

const shopRouter = express.Router();

shopRouter.get("/", getShops);
shopRouter.get("/:id", getShopById);

export default shopRouter;
