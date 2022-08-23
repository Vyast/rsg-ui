import type { NextPage } from "next";
import {
  Fragment,
  MouseEventHandler,
  useRef,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { RadioGroup } from "@headlessui/react";
import autoAnimate from "@formkit/auto-animate";
import { X as CloseIcon } from "react-feather";
import { Tab } from "@headlessui/react";

import Toggle from "../components/Toggle";
import CustomRange from "../components/CustomRange";

import { Tooltip } from "flowbite-react";

import { v1, v4 } from "uuid";
import cryptoRandomString from "crypto-random-string";
import classNames from "../utils/classNames";

const TabCategories = ["String", "Integer", "UUID"];

const Characters = {
  ascii: "!\"#$%&'()*+,-./:;<=>?@",
  numeric: "0123456789",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
};

const uuidOptions: {
  title: string;
  description: string;
  func: () => string;
  disabled?: boolean;
}[] = [
  {
    title: "v1",
    description: "RFC version 1 (timestamp) UUID",
    func: () => v1(),
  },
  {
    title: "v3",
    description: "RFC version 3 (namespace w/ MD5) UUID",
    func: () => "",
    disabled: true,
  },
  {
    title: "v4",
    description: "RFC version 4 (random) UUID",
    func: () => v4(),
  },
  {
    title: "v5",
    description: "RFC version 5 (namespace w/ SHA-1) UUID",
    func: () => "",
    disabled: true,
  },
];

const CheckIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
    <path
      d="M7 13l3 3 7-7"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TabListItem = ({
  label,
  onClick,
}: {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <Tab as={Fragment}>
    {({ selected }) => (
      <button
        onClick={onClick}
        className={classNames(
          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-500 duration-300 hover:bg-[#111]",
          selected
            ? "bg-[#111] shadow"
            : "text-white hover:bg-white/[0.12] hover:text-blue-500"
        )}
      >
        {label}
      </button>
    )}
  </Tab>
);

const TabPanelItem = ({ children }: { children: ReactNode }) => {
  return (
    <Tab.Panel
      className={classNames(
        "flex flex-col gap-4 rounded-md bg-[#2a2a2a] px-3 pt-4 pb-6"
      )}
    >
      {children}
    </Tab.Panel>
  );
};

const Home: NextPage = () => {
  const parent = useRef(null);

  const [tab, setTab] = useState(0);
  const [uuid, setUUID] = useState(uuidOptions[0]);

  const [value, setValue] = useState<string | undefined>(undefined);
  const [length, setLength] = useState(12);

  const [numeric, setNumeric] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [ascii, setAscii] = useState(false);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const onGenerate = () => {
    switch (tab) {
      case 0:
        let characters = "";

        if (numeric) characters += Characters.numeric;
        if (uppercase) characters += Characters.uppercase;
        if (lowercase) characters += Characters.lowercase;
        if (ascii) characters += Characters.ascii;

        setValue(
          cryptoRandomString(
            characters === "" ? { length, type: "hex" } : { length, characters }
          )
        );
        break;
      case 1:
        setValue(cryptoRandomString({ type: "numeric", length }));
        break;
      case 2:
        setValue(uuid!.func());
        break;
      default:
        setValue("Error");
    }
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

          <div className="my-8 w-full rounded-lg">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl p-1">
                {TabCategories.map((e, index) => (
                  <TabListItem
                    key={index}
                    label={e}
                    onClick={() => setTab(index)}
                  />
                ))}
              </Tab.List>

              <Tab.Panels className="mt-2">
                <TabPanelItem>
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
                  <CustomRange value={length} setValue={setLength} />
                </TabPanelItem>

                <TabPanelItem>
                  <CustomRange value={length} setValue={setLength} />
                </TabPanelItem>

                <TabPanelItem>
                  <div className="mx-auto w-full">
                    <RadioGroup value={uuid} onChange={setUUID}>
                      <div className="space-y-2">
                        {uuidOptions.map((o, index) => (
                          <RadioGroup.Option
                            key={index}
                            value={o}
                            disabled={o.disabled}
                            className={({ checked }) =>
                              `${
                                checked
                                  ? "bg-blue-500 bg-opacity-75 text-white"
                                  : "border-2 border-gray-700"
                              } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md duration-300 ${
                                o.disabled ? "border-0 bg-[#111]" : ""
                              }`
                            }
                          >
                            {({ checked }) => (
                              <div className="flex w-full items-center justify-between">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className="font-medium"
                                    >
                                      {o.title}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                      as="span"
                                      className={`inline ${
                                        checked ? "text-white" : "text-gray-400"
                                      }`}
                                    >
                                      <span>{o.description}</span>
                                    </RadioGroup.Description>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="shrink-0 text-white">
                                    <CheckIcon className="h-6 w-6" />
                                  </div>
                                )}
                              </div>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </TabPanelItem>
              </Tab.Panels>
            </Tab.Group>
          </div>

          <div ref={parent} className="w-full">
            {value && (
              <div className="mb-8 flex items-center justify-between break-all rounded-lg bg-[#2a2a2a] px-2 py-1">
                <div></div>
                <Tooltip content="Click to copy" placement="bottom">
                  <div
                    className="cursor-pointer select-none duration-200 hover:text-blue-500"
                    onClick={() => {
                      navigator.clipboard.writeText(value);
                    }}
                  >
                    {value}
                  </div>
                </Tooltip>
                <CloseIcon
                  onClick={() => setValue(undefined)}
                  className="cursor-pointer duration-200 hover:text-blue-500"
                />
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => onGenerate()}
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
