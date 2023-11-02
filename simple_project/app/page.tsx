import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="px-12 py-3 ">
      <div>
        <h1 className="text-2xl font-bold">Search now🚀</h1>
      </div>
    </main>
  );
}
