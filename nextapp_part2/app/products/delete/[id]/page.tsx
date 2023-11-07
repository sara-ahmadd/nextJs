"use client";
import { deleteProduct } from "@/lib/deleteProduct";
import { ProductType } from "@/lib/getAllProducts";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Delete({ params }: { params: { id: string } }) {
  const { id } = params;
  const [pro, setProd] = useState({
    title: "",
    description: " ",
    image: "/skirt.jpg",
    category: "",
    price: 0,
  });

  useEffect(() => {
    const deleteProd = async () => {
      const data: Promise<ProductType> = await deleteProduct(id);
      const p = await data;
      return p;
    };
    deleteProd().then((res) => {
      setProd(res);
    });
  }, [id]);

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-3 sm:mx-auto my-14">
      <div className="card-body">
        <h2 className="card-title">Success</h2>
        <p>You deleted this product : {pro?.title ?? ""}</p>
        <div className="card-actions justify-end">
          <Link href={"/products"} className="btn btn-primary text-center">
            Products
          </Link>
        </div>
      </div>
    </div>
  );
}
