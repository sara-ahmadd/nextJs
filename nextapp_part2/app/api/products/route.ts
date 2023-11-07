import Product from "@/models/product";
import { dbConnect } from "@/utils/mongo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
//http://localhost:3000/api/products

export type ProductType = {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
};

export async function GET(req: Request, res: Response) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    if (searchParams.has("id")) {
      const product = await Product.findById(searchParams.get("id"));
    
      return NextResponse.json({ data: product });
    } else {
      const prods = await Product.find();
 
      return NextResponse.json({ data: prods });
    }
  } catch (error) {
    return NextResponse.json({ msg: "Error in fetching products." });
  }
}

export async function POST(req: Request, res: Response) {
  try {
    await dbConnect();
    const request = await req.json();
    const product = await Product.create({ ...request });

    return NextResponse.json({ data: product });
  } catch (error) {
    return NextResponse.json({ msg: "Error in creating the product." });
  }
}

export async function PUT(req: Request, res: Response) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const request = await req.json();
    const product = await Product.findByIdAndUpdate(searchParams.get("id"), {
      ...request,
    });

    return NextResponse.json({ data: product });
  } catch (error) {
    return NextResponse.json({ msg: "Error in updating the product." });
  }
}

export async function DELETE(req: Request, res: Response) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const prod = await Product.findByIdAndDelete(searchParams.get("id"));
    return NextResponse.json({ data: prod });
  } catch (error) {
    return NextResponse.json({ msg: "Error in deleting the product." });
  }
}
