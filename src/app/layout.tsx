import "@/styles/globals.css";

import { Rubik } from "@next/font/google";
import clsx from "clsx";
//className="h-full scroll-smooth antialiased"
//className="flex h-full flex-col bg-[#111] text-white"

const inter = Rubik({
  subsets: ["latin"],
  variable: "--rubik-font",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-blue-300">
        <header>header</header>
        <main className="h-full bg-red-300">{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
