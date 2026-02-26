import React from "react";
import { Texts } from "../Texts/Texts";

type renderHomeStatusTextProps = {
  isRunning: boolean;
  isPaused: boolean;
  textStyle: object;
};

export function RenderHomeStatusText({
  isRunning,
  isPaused,
  textStyle,
}: renderHomeStatusTextProps) {
  switch (true) {
    case isPaused:
      return <Texts sxText={textStyle}>Cronometro em pausa</Texts>;

    case isRunning && !isPaused:
      return <Texts sxText={textStyle}>Hora de se concentrar</Texts>;

    default:
      return <Texts sxText={textStyle}>Cronometro em pausa</Texts>;
  }
}
