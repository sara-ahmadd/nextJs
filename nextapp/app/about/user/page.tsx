import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Page",
  description: "home page of the app",
};

export default function Admin() {
  return (
    <div className="w-screen h-screen flex justify-center p-5">
      <h1 className="font-bold text-red-500 text-2xl">
        User page directed from about
      </h1>
    </div>
  );
}
