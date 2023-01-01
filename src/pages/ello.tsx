import { type NextPage } from "next";
import { useState } from "react";
import CloseIcon from "@heroicons/react/24/outline/XMarkIcon";
import * as Tooltip from "@radix-ui/react-tooltip";
import { characters } from "@/data/characters";
import Toggle from "@/components/Toggle";
import { randomUUID } from "crypto";

const Home: NextPage = () => {
  const [value, setValue] = useState<string>();

  const [strLength, setStrLength] = useState(12);
  const [numLength, setNumLength] = useState(12);

  const [numeric, setNumeric] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [ascii, setAscii] = useState(false);

  const generate = () => {
    setValue(randomUUID());
  };

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

          <div className="my-6 w-full rounded-lg">
            <div className="flex flex-col gap-4 rounded-md bg-[#2a2a2a] px-3 py-4">
              <Toggle
                label="Numeric Digits"
                description="(0-9)"
                enabled={numeric}
                setEnabled={setNumeric}
              />
              <Toggle
                label="Uppercase Letters"
                description="(A-Z)"
                enabled={uppercase}
                setEnabled={setUppercase}
              />
              <Toggle
                label="Lowercase Letters"
                description="(a-z)"
                enabled={lowercase}
                setEnabled={setLowercase}
              />
              <Toggle
                label="ASCII Characters"
                description="(#$%*, etc)"
                enabled={ascii}
                setEnabled={setAscii}
              />
            </div>
          </div>

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
            onClick={() => generate()}
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
