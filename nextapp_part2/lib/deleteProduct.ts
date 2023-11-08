import { ProductType } from "./getAllProducts";
const baseURL = process.env.DEV_HOST || "http://localhost:3000";

export const deleteProduct = async (id: string) => {
  const data = await fetch(`${baseURL}/api/products?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  return res.data;
};
