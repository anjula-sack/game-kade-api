import express from "express";
import {
  getAllCategories,
  getItemsByCategoryId,
} from "../services/category.service";

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id/items", getItemsByCategoryId);

export default categoryRouter;
