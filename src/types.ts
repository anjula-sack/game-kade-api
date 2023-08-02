export interface Item {
  id: string;
  category: string;
  "item-name": string;
  price: string;
  rating: number;
  imageURL: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  imageURL: string;
  items?: Item[];
}
