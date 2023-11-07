"use client";
import { ProductType, getAllProducts } from "@/lib/getAllProducts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Products() {
  // const data: Promise<ProductType[]> = getAllProducts();
  // const res = await data;
  // console.log(res);
  // const products: ProductType[] = data;
  const [res, setRes] = useState([
    {
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
    },
  ]);
  async function prods() {
    const data: Promise<ProductType[]> = await getAllProducts();
    const resp: ProductType[] = await data;
    setRes(resp);
    return resp;
  }

  useEffect(() => {
    prods();
  }, []);
  const content = (
    <div className="flex gap-3 justify-center flex-wrap items-start w-full h-full">
      {res.map((p) => (
        <Link
          href={`/products/${p.id}`}
          key={p.id}
          className="border-2 rounded-md border-red-500 p-4 flex flex-col justify-between items-center w-64 h-64"
        >
          <h1>{p.title}</h1>
          <Image
            src={p.category.image}
            width={100}
            height={100}
            alt={p.title}
          />
          <p className="text-1xl font-bold ">Category :{p.category.name}</p>
          <p className="text-1xl font-bold ">Price : ${p.price}</p>
        </Link>
      ))}
    </div>
  );
  return content;
}
