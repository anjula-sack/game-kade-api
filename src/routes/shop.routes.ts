import express from "express";
import { getShops } from "../services/shop.service";

const shopRouter = express.Router();

shopRouter.get("/", getShops);

export default shopRouter;
