import { Request, Response } from "express";
import shops from "../__mocks__/shops.json";
import { Shop } from "../types";

export const getShops = async (req: Request, res: Response) => {
  try {
    res.status(200).json(shops);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getShopById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ error: "Please provide a item id parameter." });
    }

    const shop = shops.find((shop: Shop) => shop.id == id);

    if (!shop) {
      return res.status(404).json({ error: "Shop not found." });
    }

    res.status(200).json(shop);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
