import { Request, Response } from "express";
import categories from "../__mocks__/categories.json";
import items from "../__mocks__/items.json";
import { Item } from "../types";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getItemsByCategoryId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Please provide an category id" });
    }

    const itemsByCategoryId = items.filter((item: Item) => item.category == id);

    if (!itemsByCategoryId) {
      return res.status(404).json({ error: "Items not found." });
    }

    res.status(200).json(itemsByCategoryId);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
