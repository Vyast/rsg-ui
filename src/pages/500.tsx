import { NextPage } from "next";

const Custom404: NextPage = () => {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-shrink-0 justify-center">
        <a href="/" className="inline-flex">
          <span className="sr-only">Workflow</span>
          <img
            className="h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div className="py-16">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-500">500</p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl sm:tracking-tight">
            Error Occurred.
          </h1>

          <div className="mt-6">
            <a
              href="/"
              className="text-base font-medium text-blue-600 hover:text-blue-500"
            >
              Home<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Custom404;
