import { ProductType } from "@/lib/getAllProducts";
import { getProduct } from "@/lib/getProdut";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function Product({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  const data: Promise<ProductType> = getProduct(productId.toString());
  const p = await data;
  if (!p) notFound();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Link
        href={"/products"}
        className="p-5 w-44 h-20 hover:text-white hover:bg-red-500 transition-all border-red-500 rounded-md border-2 text-2xl font-semibold"
      >
        Products
      </Link>
      <div className="p-4 flex flex-col justify-between items-center w-2/5 h-2/5">
        <h1 className="text-2xl font-bold text-red-500 py-3">{p.title}</h1>
        <Image
          src={p.category?.image}
          width={300}
          height={300}
          className="rounded-md"
          alt={p.title}
        />
        <p className="text-2xl font-bold ">Category :{p.category?.name}</p>
        <p className="text-2xl font-bold ">Price : ${p.price}</p>
      </div>
    </div>
  );
}
