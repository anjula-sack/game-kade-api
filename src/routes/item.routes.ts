import express from "express";
import { getItemById, getItems } from "../services/item.service";

const itemRouter = express.Router();

itemRouter.get("/", getItems);
itemRouter.get("/:id", getItemById);

export default itemRouter;
