import React from "react";
import { Inter } from "next/font/google";
import Posts from "./components/Posts";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} flex justify-center flex-col items-center`}
    >
      
      <Posts />
    </main>
  );
}
