import { NextResponse } from "next/server";

type Data = {
  name?: string;
  email?: string;
  messege?: string;
};
export async function POST(request: Request) {
  const data: Data = await request.json();
  console.log("data : ", data);
  const { name, email, messege } = data;
  return NextResponse.json({ name, email, messege });
}
