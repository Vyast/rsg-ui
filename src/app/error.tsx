import Link from "next/link";

export default function Error() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <p className="text-base font-semibold text-blue-500">500</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl sm:tracking-tight">
          Error Occurred.
        </h1>

        <div className="mt-6 text-base font-medium text-blue-600 hover:text-blue-500">
          <Link href="/">Home &rarr;</Link>
        </div>
      </div>
    </main>
  );
}
