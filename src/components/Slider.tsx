import { Root, Track, Range, Thumb } from "@radix-ui/react-slider";
import { Dispatch, SetStateAction } from "react";

export const Slider = ({
  min,
  max,
  value,
  setValue,
}: {
  min?: number;
  max?: number;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Root
      className="SliderRoot"
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label="Volume"
    >
      <Track className="SliderTrack">
        <Range className="SliderRange" />
      </Track>
      <Thumb className="SliderThumb" />
    </Root>
  );
};
