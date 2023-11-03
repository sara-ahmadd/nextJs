import { PostType, getPosts } from "@/lib/getPosts";
import Link from "next/link";
import React from "react";
import ListItem from "./ListItem";

export default function Posts() {
  const data = getPosts();
  return (
    <div>
      {data?.map((p) => {
        return <ListItem post={p} key={p.id} />;
      })}
    </div>
  );
}
