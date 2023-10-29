import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "home page of the app",
};

export default function Home() {
  return (
    <main className="text-2xl w-screen h-screen flex flex-col justify-start items-center p-4 font-semibold">
      <h1 className="text-3xl font-bold underline text-sky-500">
        Hello world!
      </h1>
    </main>
  );
}
