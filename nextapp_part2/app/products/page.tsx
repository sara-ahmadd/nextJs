import { ProductType, getAllProducts } from "@/lib/getAllProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Products() {
  const data: Promise<ProductType[]> = getAllProducts();
  const res = await data;

  const content = (
    <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
      <Link
        href={"/"}
        className="p-5 w-44 h-20 hover:text-white hover:bg-red-500 transition-all border-red-500 rounded-md border-2 text-2xl font-semibold"
      >
        Home
      </Link>
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
    </div>
  );
  return content;
}
