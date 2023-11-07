const baseURL = "http://localhost:3000/api/products";

export type ProductType = {
  title: string;
  price: number;
  description: string;
  _id?: string;
  image: string;
  category: string;
};

export const getAllProducts = async () => {
  const data = await fetch(baseURL, {
    method: "GET",
    cache: "no-store",
  });
  const res = await data.json();
  return res.data;
};
