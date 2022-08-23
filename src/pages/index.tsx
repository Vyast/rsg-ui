import type { NextPage } from "next";
import { Fragment, MouseEventHandler, SetStateAction, useState } from "react";
import { CgSpinner } from "react-icons/cg";

//import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Tab } from "@headlessui/react";
//import { trpc } from "../utils/trpc";

import Toggle from "../components/Toggle";
import CustomRange from "../components/CustomRange";
import RadioGroup from "../components/RadioGroup";

import { v1, v3, v4, v5 } from "uuid";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const TabCategories = [
  {
    label: "String",
    children: (
      <>
        <Toggle label="Numeric Digits" description="(0-9)" />
        <Toggle label="Uppercase Letters" description="(A-Z)" />
        <Toggle label="Lowercase Letters" description="(a-z)" />
        <Toggle label="ASCII Characters" description="(#$%*, etc)" />

        <CustomRange />
      </>
    ),
  },
  {
    label: "Integer",
    children: <CustomRange />,
  },
  {
    label: "UUID",
    children: <RadioGroup />,
  },
];

const uuidOptions = [
  {
    title: "v1",
    description: "RFC version 1 (timestamp) UUID",
  },
  {
    title: "v3",
    description: "RFC version 3 (namespace w/ MD5) UUID",
  },
  {
    title: "v4",
    description: "RFC version 4 (random) UUID",
  },
  {
    title: "v5",
    description: "RFC version 5 (namespace w/ SHA-1) UUID",
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

const Home: NextPage = () => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [tab, setTab] = useState<number>(0);
  const [disabled, setDisabled] = useState(false);
  //const [listRef] = useAutoAnimate<HTMLDivElement>();

  const [uuid, setUUID] = useState<"v1" | "v3" | "v4" | "v5">("v1");

  const onGenerate = () => {
    if (disabled) return;
    setDisabled(true);

    switch (tab) {
      case 0:
        // code block
        break;
      case 1:
        // code block
        break;
      case 2:
        const value = uuid === "v1" ? v1() : uuid === "v4" ? v4() : "";

        setValue(value);
        break;
      default:
        setValue("Error");
    }

    setDisabled(false);
  };

  //const mutation = trpc.useMutation(["gen.genCrypto"]);
  //show gen string above button maybe put a border around it and when youh over highlight it, then a tooltip says click to copy

  //style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(344px, 44px);"
  //style="position: absolute; left: 0px; transform: translate(59px, 0px);"

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
                    label={e.label}
                    onClick={() => setTab(index)}
                  />
                ))}
              </Tab.List>

              <Tab.Panels className="mt-2">
                {TabCategories.map((e, index) => (
                  <Tab.Panel
                    key={index}
                    className={classNames(
                      "flex flex-col gap-4 rounded-md bg-[#2a2a2a] px-3 pt-4 pb-6"
                    )}
                  >
                    {e.children}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>

          {value && (
            <div className="mb-8 w-full rounded-lg bg-[#2a2a2a] py-1 px-2 text-center hover:text-blue-500">
              <span className="cursor-pointer">{value}</span>
            </div>
          )}

          <button
            type="button"
            onClick={() => onGenerate()}
            disabled={disabled}
            className="text-md w-full items-center rounded-md bg-blue-600 px-4 py-2 text-center font-medium shadow-sm duration-150 hover:bg-blue-500 motion-safe:hover:scale-95"
          >
            {disabled ? (
              <div className="flex items-center justify-center">
                <CgSpinner className="mr-3 h-6 w-6 animate-spin" />
                Generating
              </div>
            ) : (
              "Generate"
            )}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
