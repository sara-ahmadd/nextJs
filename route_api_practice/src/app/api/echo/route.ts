import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  //   const name = searchParams.get("name");
  //   const age = searchParams.get("age");
  //   return NextResponse.json({ name, age });
  // return NextResponse.json();

  return NextResponse.json(Object.fromEntries(searchParams.entries()));
}
