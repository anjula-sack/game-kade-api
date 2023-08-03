import { Request, Response } from "express";
import shops from "../__mocks__/shops.json";

export const getShops = async (req: Request, res: Response) => {
  try {
    res.status(200).json(shops);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
