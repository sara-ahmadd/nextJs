import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Page",
  description: "home page of the app",
};

export default function Admin() {
  // throw new Error("admin page error");
  return (
    <div className="w-screen h-screen flex justify-center p-5">
      <h1 className="font-bold text-red-500 text-2xl">
        Admin page directed from about
      </h1>
    </div>
  );
}
