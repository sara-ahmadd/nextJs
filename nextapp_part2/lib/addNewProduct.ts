import { ProductType } from "./getAllProducts";

const baseURL = "http://localhost:3000/api/products";

export const addNewProduct = async (product: ProductType) => {
  const data = await fetch(baseURL, {
    method: "POST",
    headers: {
      Content: "Application/json",
    },
    body: JSON.stringify(product),
  });
  return data.json();
};
