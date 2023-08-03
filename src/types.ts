export interface Item {
  id: string;
  category: string;
  "item-name": string;
  price: string;
  rating: string;
  imageURL: string;
  description: string;
}

export interface Shop {
  id: string;
  name: string;
  address: string;
  url: string;
  time: string;
}
