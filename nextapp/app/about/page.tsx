import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "about page of the app",
};

export default function About() {
  //   throw new Error("Somthing went wrong");
  return (
    <div className="text-2xl w-screen h-screen flex flex-col justify-start items-center p-4 font-semibold">
      <h1>About page</h1>
      <Link href={"/about/admin"} className=" underline text-red-400">
        Admin page
      </Link>
      <Link href={"/about/user"} className=" underline text-red-400">
        User page
      </Link>
    </div>
  );
}
