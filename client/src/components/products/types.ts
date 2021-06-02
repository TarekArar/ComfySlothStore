export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageURL: string;
  overview: string;
}

export type ProductsList = Array<Product>;
