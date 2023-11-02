import { getWikiResults } from "@/lib/getWikiResults";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Params = {
  params: {
    search: string;
  };
};
export type SearchResult = {
  extract: string;
  index: number;
  ns: number;
  pageid: number;
  pageimage: string;
  terms?: {};
  thumbnail: {
    source: string;
    width: number;
    height: number;
  };
  title: string;
};
export default async function SearchText({ params: { search } }: Params) {
  const res = await getWikiResults(search);
  const results = await res;
  const data: SearchResult[] = results.query.pages;
  const resArray = Object.values(data);

  return (
    <div className="px-12 py-3">
      {resArray &&
        resArray.map((i) => (
          <div
            key={i.pageid}
            className="flex justify-start gap-2 pt-3 items-start"
          >
            {i.thumbnail?.source && (
              <Image
                src={i.thumbnail.source}
                width={i.thumbnail.width}
                height={i.thumbnail.height}
                alt={i.title}
              />
            )}
            <div className="flex flex-col text-slate-600">
              <h1 className="text-2xl font-bold underline">
                <Link
                  href={`https://en.wikipedia.org/?curid=${i.pageid}`}
                  target="_blank"
                >
                  {i.title}
                </Link>
              </h1>
              <p>{i.extract}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
