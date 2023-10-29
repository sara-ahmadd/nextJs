import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-5">
      <h1 className="font-bold text-sky-500 text-2xl">
        Special for About routes
      </h1>
      {children}
    </div>
  );
}
