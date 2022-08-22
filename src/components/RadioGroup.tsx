import { useState } from "react";
import { RadioGroup as HeadlessRadioGroup } from "@headlessui/react";

const options = [
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

function CheckIcon(props: any) {
  return (
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
}

export default function RadioGroup() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="mx-auto w-full">
      <HeadlessRadioGroup value={selected} onChange={setSelected}>
        <HeadlessRadioGroup.Label className="sr-only">
          Server size
        </HeadlessRadioGroup.Label>
        <div className="space-y-2">
          {options.map((o, index) => (
            <HeadlessRadioGroup.Option
              key={index}
              value={o}
              className={({ checked }) =>
                `${
                  checked
                    ? "bg-blue-500 bg-opacity-75 text-white"
                    : "border-2 border-gray-700"
                } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md duration-300`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <HeadlessRadioGroup.Label
                          as="p"
                          className={`font-medium`}
                        >
                          {o.title}
                        </HeadlessRadioGroup.Label>
                        <HeadlessRadioGroup.Description
                          as="span"
                          className={`inline ${
                            checked ? "text-white" : "text-gray-400"
                          }`}
                        >
                          <span>{o.description}</span>
                        </HeadlessRadioGroup.Description>
                      </div>
                    </div>
                    {checked && (
                      <div className="shrink-0 text-white">
                        <CheckIcon className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </HeadlessRadioGroup.Option>
          ))}
        </div>
      </HeadlessRadioGroup>
    </div>
  );
}
