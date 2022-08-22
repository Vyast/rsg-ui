import type { NextPage } from "next";
import { Fragment, useState } from "react";

import { Switch, Tab } from "@headlessui/react";
import { trpc } from "../utils/trpc";

import Toggle from "../components/Toggle";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const TabCategories = [
  {
    label: "String",
    children: <div>hi 1</div>,
  },
  {
    label: "Integer",
    children: <div>hi 2</div>,
  },
  {
    label: "UUID",
    children: <div>hi 3</div>,
  },
];

const Home: NextPage = () => {
  const [enabled, setEnabled] = useState(false);

  //const mutation = trpc.useMutation(["gen.genCrypto"]);
  //show gen string above button maybe put a border around it and when youh over highlight it, then a tooltip says click to copy
  //focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-8 text-center text-5xl font-bold">
        Random String Generator
      </h1>

      <div className="w-full rounded-lg bg-[#191919] lg:max-w-[50%]">
        <div className="flex flex-col items-center justify-center px-4 py-5 sm:p-6">
          <h2 className="text-center text-2xl font-medium text-blue-500">
            Settings
          </h2>

          <div className="my-8 w-full rounded-lg">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl p-1">
                {TabCategories.map((e, index) => (
                  <Tab key={index} as={Fragment}>
                    {({ selected }) => {
                      const className = classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-500 hover:bg-[#111] duration-200",
                        //"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-[#111] shadow"
                          : "text-white hover:bg-white/[0.12] hover:text-blue-500"
                      );

                      return <button className={className}>{e.label}</button>;
                    }}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="mt-2">
                <Tab.Panel
                  className={classNames(
                    "flex flex-col gap-4 rounded-md bg-[#2a2a2a] p-3"
                    //"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <Toggle label="Numeric Digits" description="(0-9)" />
                  <Toggle label="Uppercase Letters" description="(A-Z)" />
                  <Toggle label="Lowercase Letters" description="(a-z)" />

                  <label
                    htmlFor="default-range"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Length (1-65536)
                  </label>
                  <input
                    id="default-range"
                    type="range"
                    value="50"
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                  />
                </Tab.Panel>

                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-[#2a2a2a] p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    <li className="relative rounded-md p-3 hover:bg-[#191919] hover:text-gray-300">
                      <h3 className="text-sm font-medium leading-5">
                        Post Title
                      </h3>

                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4">
                        <li>Post Date</li>
                        <li>&middot;</li>
                        <li>Post Comment Count comments</li>
                        <li>&middot;</li>
                        <li>Post Share Count shares</li>
                      </ul>

                      <a
                        href="#"
                        className={classNames(
                          "absolute inset-0 rounded-md",
                          "ring-red-800 focus:z-10 focus:outline-none focus:ring-2"
                        )}
                      />
                    </li>
                  </ul>
                </Tab.Panel>

                <Tab.Panel
                  className={classNames(
                    "rounded-xl bg-[#2a2a2a] p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    <li className="relative rounded-md p-3 hover:bg-[#191919] hover:text-gray-300">
                      <h3 className="text-sm font-medium leading-5">
                        Post Title
                      </h3>

                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4">
                        <li>Post Date</li>
                        <li>&middot;</li>
                        <li>Post Comment Count comments</li>
                        <li>&middot;</li>
                        <li>Post Share Count shares</li>
                      </ul>

                      <a
                        href="#"
                        className={classNames(
                          "absolute inset-0 rounded-md",
                          "ring-red-800 focus:z-10 focus:outline-none focus:ring-2"
                        )}
                      />
                    </li>
                  </ul>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

          {/* <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm duration-150 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 motion-safe:hover:scale-95"
          >
            Button text
          </button> */}

          <button
            type="button"
            className="text-md w-full items-center rounded-md bg-blue-600 px-4 py-2 text-center font-medium shadow-sm duration-150 hover:bg-blue-500 motion-safe:hover:scale-95"
          >
            Generate
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
