"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col w-1/2 mx-auto my-0 px-12 py-3 gap-3">
      <h2 className="font-bold text-4xl ">Something went wrong!</h2>
      <button
        className="border-2 rounded-md border-orange-300 p-2 text-2xl font-bold"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <Link
        className="border-2 rounded-md bg-orange-300 p-2 text-2xl font-bold text-white text-center"
        href={"/"}
      >
        Go Home
      </Link>
    </div>
  );
}
