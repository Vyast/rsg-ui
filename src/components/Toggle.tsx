import { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import classNames from "../utils/classNames";

export default function Toggle({
  label,
  description,
  enabled,
  setEnabled,
}: {
  label: string;
  description: string;
  enabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Switch.Group as="div" className="flex items-center justify-between">
      <span className="flex flex-grow flex-col pr-4">
        <Switch.Label as="span" className="pb-1 text-sm font-medium" passive>
          {label}
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-400">
          {description}
        </Switch.Description>
      </span>

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? "bg-blue-500" : "bg-gray-700",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
    </Switch.Group>
  );
}
