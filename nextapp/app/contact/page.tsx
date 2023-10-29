import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "home page of the app",
};

export default function Contact() {
  return (
    <div className="text-2xl w-screen h-screen flex justify-center items-start p-4 font-semibold text-red-500">
      Contact
    </div>
  );
}
