import React from "react";
import { Texts } from "../Texts/Texts";

type renderHomeStatusTextProps = {
  currentStatus: "focus" | "short_break" | "long_break" | "paused";
  textStyle: object;
};

export const RenderHomeStatusText = ({
  currentStatus,
  textStyle,
}: renderHomeStatusTextProps) => {
  switch (currentStatus) {
    case "focus":
      return <Texts sxText={textStyle}>Hora de se concentrar</Texts>;

    case "short_break":
      return <Texts sxText={textStyle}>Hora de pausa curta</Texts>;

    case "long_break":
      return <Texts sxText={textStyle}>Hora de pausa longa</Texts>;

    case "paused":
    default:
      return <Texts sxText={textStyle}>Cronometro em pausa</Texts>;
  }
};
