"use client";
import { getWikiResults } from "@/lib/getWikiResults";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form className="flex justify-between gap-4 w-56" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 rounded-md outline-0"
      />
      <button type="submit" className=" w-10 bg-slate-100 rounded-md px-2">
        🚀
      </button>
    </form>
  );
}
