import React from "react";
import { User } from "../../../types";
import Image from "next/image";

export default function UserCard({ user }: { user: User }) {
  return (
    <>
      {user ? (
        <div>
          <h1>Hello! {user.name ?? "Guest"}</h1>
          {user.image && (
            <Image
              src={user.image}
              alt={user.name ?? "User"}
              width={200}
              height={200}
              className="rounded-full"
            />
          )}
        </div>
      ) : (
        <h1>User is not authenticated</h1>
      )}
    </>
  );
}
