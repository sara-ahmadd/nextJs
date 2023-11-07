"use client";
import { ProductType } from "@/lib/getAllProducts";
import { getProduct } from "@/lib/getProdut";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Product({ params }: { params: { productId: string } }) {
  const { productId } = params;

  // const data: Promise<ProductType> = getProduct(productId.toString());

  // const p = await data;

  const [p, setP] = useState({
    id: 10,
    title: "Rustic Frozen Gloves",
    price: 727,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    images: [
      "https://i.imgur.com/nZnWUc0.jpeg",
      "https://i.imgur.com/uDpzwEk.jpeg",
      "https://i.imgur.com/kTPCFG2.jpeg",
    ],
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/RLnJJyQ.jpeg",
    },
  });
  const getP = async (id: string) => {
    const data: Promise<ProductType> = getProduct(id);
    const res = await data;
    setP(res);
    return res;
  };
  useEffect(() => {
    console.log(productId);
    // getP(params[0]);
  }, [productId]);
  return (
    <div className="border-2 rounded-md border-red-500 p-4 flex flex-col justify-between items-center w-64 h-64">
      <h1>{p.title}</h1>
      <Image src={p.category.image} width={100} height={100} alt={p.title} />
      <p className="text-1xl font-bold ">Category :{p.category.name}</p>
      <p className="text-1xl font-bold ">Price : ${p.price}</p>
    </div>
  );
}
