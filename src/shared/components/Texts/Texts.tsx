import React, { ReactElement } from "react";
import { Text } from "react-native";

type TTextsProps = {
  sxText: object;
  children: React.ReactNode | string | ReactElement;
};

export const Texts = ({ sxText, children }: TTextsProps) => {
  return <Text style={sxText}>{children}</Text>;
};
