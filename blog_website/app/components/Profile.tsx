import Image from "next/image";
import React from "react";

export default function Profile() {
  return (
    <div className={`pt-5 flex justify-center flex-col items-center`}>
      <Image
        src={"/sara-profile.jpg"}
        width={200}
        height={200}
        className=" rounded-full border-2 border-blue-400"
        alt="sara"
      />
      <h1 className="text-2xl font-bold text-slate-700">Hello👋</h1>
    </div>
  );
}
