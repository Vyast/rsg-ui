import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full scroll-smooth antialiased" lang="en">
      <Head />
      <body className="flex h-full flex-col bg-[#111] text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
