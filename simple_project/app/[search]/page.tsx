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
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  title: string;
};

export type Result = {
  query?: {
    pages?: SearchResult[];
  };
};

export async function generateMetadata({ params: { search } }: Params) {
  return {
    title: `${search.replaceAll("%20", " ")}` ?? "Unknown",
  };
}

export default async function SearchText({ params: { search } }: Params) {
  const res: Promise<Result> = await getWikiResults(search);
  const results = await res;
  const data: SearchResult[] | undefined = Object.values(
    results.query?.pages ?? {}
  );

  return (
    <div className="px-12 py-3">
      {data?.length > 0 ? (
        data.map((i) => (
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
        ))
      ) : (
        <div className="px-12 py-3">
          <h1 className="text-4xl font-bold">{`${search}`} Is Not Found</h1>
        </div>
      )}
    </div>
  );
}
