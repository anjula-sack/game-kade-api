import { Request, Response } from "express";
import categories from "../__mocks__/categories.json";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
