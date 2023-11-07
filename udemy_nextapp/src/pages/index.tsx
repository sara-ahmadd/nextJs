import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <h1>Shop now 🛒</h1>
      <Link href={'/products'} className='w-fit h-fit p-3 border-2 border-red-500 rounded-md font-semibold hover:text-white hover:bg-red-500'>Products</Link>
    </main>
  );
}
