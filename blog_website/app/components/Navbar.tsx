import React from 'react'

export default function Navbar() {
  return (
    <nav className="container w-full border-b-2 border-blue-500 flex justify-between flex-col sm:flex-row">
      <h1 className="text-4xl text-blue-500 font-bold">Sara&apos;s Blog</h1>
      <ul className="flex gap-5 items-center">
        <li>Twitter</li>
        <li>Youtube</li>
        <li>Github</li>
        <li>Laptop</li>
      </ul>
    </nav>
  );
}
