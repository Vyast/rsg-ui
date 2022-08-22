import { useState } from "react";
import { RadioGroup as HeadlessRadioGroup } from "@headlessui/react";

const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
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
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="mx-auto w-full">
      <HeadlessRadioGroup value={selected} onChange={setSelected}>
        <HeadlessRadioGroup.Label className="sr-only">
          Server size
        </HeadlessRadioGroup.Label>
        <div className="space-y-2">
          {plans.map((plan) => (
            <HeadlessRadioGroup.Option
              key={plan.name}
              value={plan}
              className={({ checked }) =>
                `${
                  checked ? "bg-blue-500 bg-opacity-75 text-white" : "bg-white"
                } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md duration-300 focus:outline-none`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <HeadlessRadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {plan.name}
                        </HeadlessRadioGroup.Label>
                        <HeadlessRadioGroup.Description
                          as="span"
                          className={`inline ${
                            checked ? "text-sky-100" : "text-gray-500"
                          }`}
                        >
                          <span>
                            {plan.ram}/{plan.cpus}
                          </span>{" "}
                          <span aria-hidden="true">&middot;</span>{" "}
                          <span>{plan.disk}</span>
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
