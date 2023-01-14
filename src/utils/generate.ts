import { characters } from "@/data/characters";
import random from "crypto-random-string";

export const generate = (options: {
  length: number;
  isDisabled: boolean;
  isHex: boolean;
  isString: boolean;
  isInt: boolean;
  isUUID: boolean;
}) => {
  if (options.isDisabled) return;

  if (options.isUUID) {
    return crypto.randomUUID();
  }

  if (options.isString) {
    return random({
      length: options.length,
      characters: characters.lowercase + characters.uppercase,
    });
  }

  return random({
    length: options.length,
    type: options.isInt ? "numeric" : "hex",
  });
};
