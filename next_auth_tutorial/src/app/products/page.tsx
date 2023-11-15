import React from "react";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/route";
import UserCard from "../components/UserCard";
import { redirect } from "next/navigation";

export default async function ProductsPage() {
  const session = await getServerSession(options);
  //here happens the redirection to the signin page
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/products");
  }
  return (
    <>
      Productss!!!!
      <UserCard user={session.user} />
    </>
  );
}
