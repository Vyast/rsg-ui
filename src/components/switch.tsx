import { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import clsx from "clsx";

export function CustomSwitch(props: {
  isChecked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Switch
      checked={props.isChecked}
      onChange={props.setChecked}
      className={clsx(
        props.isChecked ? "bg-slate-500" : "bg-slate-700",
        "relative inline-flex h-6 w-11 items-center rounded-full"
      )}
    >
      <span
        className={clsx(
          props.isChecked ? "translate-x-6" : "translate-x-1",
          "inline-block h-4 w-4 transform rounded-full bg-white transition"
        )}
      />
    </Switch>
  );
}
