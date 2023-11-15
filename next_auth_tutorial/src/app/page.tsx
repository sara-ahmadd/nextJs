import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/route";
import UserCard from "./components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <UserCard user={session.user} />
      ) : (
        <div>You shall not pass</div>
      )}
    </>
  );
}
