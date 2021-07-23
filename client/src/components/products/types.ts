export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  imageURL: string;
  overview: string;
}

export type ProductsList = Array<Product>;
