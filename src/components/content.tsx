"use client";

import { Fragment, useEffect, useState } from "react";
import CloseIcon from "@heroicons/react/24/outline/XMarkIcon";
import { Transition } from "@headlessui/react";
import { generate } from "@/utils/generate";

import { CustomSwitch } from "./switch";
import { CustomSlider } from "./slider";
import { Display } from "./display";

export function Content() {
  const [value, setValue] = useState<string>();
  const [isDisabled, setDisabled] = useState(false);

  const [isHex, setHex] = useState(true);
  const [isString, setString] = useState(false);
  const [isInt, setInt] = useState(false);
  const [isUUID, setUUID] = useState(false);
  const [length, setLength] = useState(12);

  useEffect(() => {
    if (!isHex && !isString && !isInt && !isUUID) {
      setDisabled(true);
    } else if (isDisabled) {
      setDisabled(false);
    }
  }, [isHex, isString, isInt, isUUID]);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-5">
      <h2 className="text-center text-2xl font-medium text-white">Settings</h2>

      <div className="my-4 flex w-full flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <div className="text-white">Hexadecimal</div>
          <CustomSwitch isChecked={isHex} setChecked={setHex} />
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="text-white">String</div>
          <CustomSwitch isChecked={isString} setChecked={setString} />
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="text-white">Integer</div>
          <CustomSwitch isChecked={isInt} setChecked={setInt} />
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="text-white">UUID</div>
          <CustomSwitch isChecked={isUUID} setChecked={setUUID} />
        </div>

        <div className="flex w-full flex-col items-center gap-1">
          <div className="flex w-full items-center justify-between text-white">
            <div>Length</div>
            <div>{length}</div>
          </div>
          <CustomSlider
            label="Length"
            min={4}
            max={128}
            value={length}
            setValue={setLength}
          />
        </div>
      </div>

      <Transition
        as={Fragment}
        show={!!value}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 scale-50"
        enterTo="opacity-100 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="mb-4 flex w-full items-center justify-between break-all rounded-lg bg-slate-800 px-2 py-1">
          <div />

          <Display value={value!} />

          {value && (
            <CloseIcon
              onClick={() => setValue(undefined)}
              className="ml-2 h-6 w-6 cursor-pointer text-white duration-150 hover:scale-95"
            />
          )}
        </div>
      </Transition>

      <button
        type="button"
        onClick={() =>
          setValue(
            generate({
              length,
              isDisabled,
              isHex,
              isString,
              isInt,
              isUUID,
            })
          )
        }
        disabled={isDisabled}
        className="text-md w-full select-none items-center rounded-md bg-white px-4 py-2 text-center font-medium duration-150 hover:scale-95 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-slate-800 disabled:text-slate-600"
      >
        Generate
      </button>
    </div>
  );
}
