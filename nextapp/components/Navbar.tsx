import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className=" w-11/12 my-0 mx-auto flex justify-between font-semibold text-xl border-2 border-sky-500 rounded-md p-3">
      <span>Logo</span>
      <ul className=" w-80 flex justify-between px-3 font-semibold text-xl">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
