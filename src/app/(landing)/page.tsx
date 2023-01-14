import { Content } from "@/components/content";

export default function Page() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-8 text-center text-5xl font-bold">
        Random String Generator
      </h1>

      <div className="w-full rounded-lg bg-slate-900 shadow-lg lg:max-w-[50%]">
        <Content />
      </div>
    </main>
  );
}
