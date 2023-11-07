import { ProductType } from "./getAllProducts";

export const getProduct = async (id: string) => {
  const data = await fetch(`http://localhost:3000/api/products?id=${id}`, {
    method: "GET",
    cache: "no-store",
  });
  const res = await data.json();
  return res.data;
};
