import { Dispatch, SetStateAction, useState } from "react";

export default function CustomRange({
  min,
  max,
  value,
  setValue,
}: {
  min?: number;
  max?: number;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}) {
  return (
    <span className="flex flex-grow flex-col pr-4">
      <div className="flex items-center justify-between pb-[0.95]">
        <label htmlFor="length" className="text-sm font-medium">
          Length
        </label>
        <div className="rounded-md border border-blue-500 px-1">{value}</div>
      </div>
      <span className="pb-3 text-sm text-gray-400">(2-48)</span>
      <input
        min={min ?? 2}
        max={max ?? 48}
        id="length"
        type="range"
        value={value}
        onInput={(e) => setValue(Number(e.currentTarget.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700 text-sm text-gray-400 duration-100"
      />
    </span>
  );
}
