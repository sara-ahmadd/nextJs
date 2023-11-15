import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/route";
import UserCard from "../components/UserCard";
import { redirect } from "next/navigation";

export default async function About() {
  const session = await getServerSession(options);
  //here happens the redirection to the signin page
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/about");
  }
  return <h1>About</h1>;
}
