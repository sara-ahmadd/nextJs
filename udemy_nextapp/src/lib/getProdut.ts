import { ProductType } from "./getAllProducts";

const singleProductURL = `https://api.escuelajs.co/api/v1/products/`;

export const getProduct = async (id: string) => {
  const data = await fetch(`${singleProductURL}/${id}`);
  const res = await data.json();
  return res;
};
