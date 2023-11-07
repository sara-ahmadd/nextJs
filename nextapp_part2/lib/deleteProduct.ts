import { ProductType } from "./getAllProducts";

export const deleteProduct = async (id: string) => {
  const data = await fetch(`http://localhost:3000/api/products?id=${id}`, {
    method: "DELETE",
  });
  const res = await data.json();
  return res.data;
};
