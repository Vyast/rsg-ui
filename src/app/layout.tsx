import "@/styles/globals.css";
import { Rubik } from "@next/font/google";
import clsx from "clsx";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--rubik-font",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={clsx(rubik.className, "bg-red-900 text-neutral-50")}>
        {children}
      </body>
    </html>
  );
}
