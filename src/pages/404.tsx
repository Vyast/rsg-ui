import { NextPage } from "next";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <p className="text-base font-semibold text-blue-500">404</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl sm:tracking-tight">
          Page not found.
        </h1>

        <div className="mt-6 text-base font-medium text-blue-600 hover:text-blue-500">
          <Link href="/">Home &rarr;</Link>
        </div>
      </div>
    </main>
  );
};

export default Custom404;
