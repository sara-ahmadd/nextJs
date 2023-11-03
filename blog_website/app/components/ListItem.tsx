import { formateDate } from "@/lib/formateDate";
import { PostType } from "@/lib/getPosts";
import Link from "next/link";
import React from "react";

export default function ListItem({ post }: { post: PostType }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="p-4">
        <Link
          href={`/posts/${post.id}`}
          className=" text-red-600 underline font-semibold text-2xl"
        >
          {post.title}
        </Link>
        <p className="text-slate-500 font-semibold text-sm">
          {formateDate(post.date)}
        </p>
      </div>
    </div>
  );
}
