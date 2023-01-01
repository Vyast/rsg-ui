"use client";

import { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import CloseIcon from "@heroicons/react/24/outline/XMarkIcon";

export default function Page() {
  const [value, setValue] = useState<string>();

  return (
    <main className="container mx-auto flex flex-col items-center justify-center p-4">
      <h1 className="mb-8 text-center text-5xl font-bold">
        Random String Generator
      </h1>

      <div className="w-full rounded-lg bg-neutral-800 lg:max-w-[50%]">
        <div className="flex flex-col items-center justify-center px-4 py-5 sm:p-6">
          <h2 className="text-center text-2xl font-medium text-blue-500">
            Settings
          </h2>

          <div className="w-full">
            {value && (
              <div className="mb-8 flex items-center justify-between break-all rounded-lg bg-[#2a2a2a] px-2 py-1">
                <div />

                <Tooltip.Provider delayDuration={50}>
                  <Tooltip.Root>
                    <Tooltip.Trigger>
                      <div
                        className="cursor-pointer select-none duration-200 hover:text-blue-500"
                        onClick={() => {
                          navigator.clipboard.writeText(value);
                        }}
                      >
                        {value}
                      </div>
                    </Tooltip.Trigger>

                    <Tooltip.Portal>
                      <Tooltip.Content className="mb-2 rounded bg-gray-700 px-2">
                        Content
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>

                <CloseIcon
                  onClick={() => setValue(undefined)}
                  className="cursor-pointer duration-200 hover:text-blue-500"
                />
              </div>
            )}
          </div>

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
}
