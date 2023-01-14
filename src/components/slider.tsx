import * as Slider from "@radix-ui/react-slider";
import { Dispatch, SetStateAction } from "react";

export function CustomSlider(props: {
  min?: number;
  max?: number;
  label: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}) {
  return (
    <Slider.Root
      min={props.min}
      max={props.max}
      aria-label={props.label}
      defaultValue={[props.value]}
      onValueChange={(value) => props.setValue(value[0]!)}
      className="relative flex h-5 w-full touch-none select-none items-center"
    >
      <Slider.Track className="relative h-1 flex-grow rounded-full bg-slate-700">
        <Slider.Range className="absolute h-full rounded-full bg-white" />
      </Slider.Track>
      <Slider.Thumb
        aria-label={props.label}
        className="block h-5 w-5 rounded-xl bg-white shadow-inner duration-100 hover:scale-95 focus:outline-slate-900"
      />
    </Slider.Root>
  );
}
