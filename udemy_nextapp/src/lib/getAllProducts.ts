export const baseURL = "https://api.escuelajs.co/api/v1/products";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt?: string;
    updatedAt?: string;
  };
  images: string[];
  creationAt?: string;
  updatedAt?: string;
};

export const getAllProducts = async () => {
  const data = await fetch(baseURL);
  if (!data.ok) throw new Error("failed to fetch data");
  const res = data.json();
  return res;
};
