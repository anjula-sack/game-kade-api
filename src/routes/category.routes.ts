import express from "express";
import { getAllCategories } from "../services/category.service";

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories);

export default categoryRouter;
