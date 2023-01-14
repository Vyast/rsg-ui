import "@/styles/globals.css";
import { AnalyticsWrapper } from "@/components/analytics";
import { Rubik } from "@next/font/google";
import clsx from "clsx";

const rubik = Rubik({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(rubik.className, "bg-white text-slate-900 antialiased")}
    >
      <head />
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
