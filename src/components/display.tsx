import * as Tooltip from "@radix-ui/react-tooltip";

export function Display(props: { value: string }) {
  return (
    <Tooltip.Provider delayDuration={50}>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <div
            className="cursor-pointer select-none text-white duration-200 hover:scale-95"
            onClick={() => navigator.clipboard.writeText(props.value)}
          >
            {props.value}
          </div>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content className="mb-2 rounded bg-slate-800 px-2 text-white">
            Click to copy
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
