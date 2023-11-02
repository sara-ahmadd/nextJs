import Link from "next/link";
import React from "react";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="flex px-12 py-3 justify-center items-center flex-col sticky top-0  md:flex-row md:justify-between  bg-orange-300">
      <h1 className="text-white font-semibold text-2xl w-fit">
        <Link href={"/"}>Rocket</Link>
      </h1>
      <Search />
    </nav>
  );
}
