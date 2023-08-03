import { Request, Response } from "express";
import items from "../__mocks__/items.json";
import { Item } from "../types";

export const getItems = async (req: Request, res: Response) => {
  try {
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ error: "Please provide a item id parameter." });
    }

    const item = items.find((item: Item) => item.id == id);

    if (!item) {
      return res.status(404).json({ error: "Item not found." });
    }

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
