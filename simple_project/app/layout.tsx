import Navbar from "./components/Navbar";
import "./globals.css";

export function generateMetadata() {
  return {
    title: "Rocket🚀",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-slate-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
