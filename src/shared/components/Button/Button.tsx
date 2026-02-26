import { ReactElement } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type TButtonsProps = {
  sxTouchableBtn: object;
  sxTextBtn: object;
  children: React.ReactNode | string | ReactElement;
};

export const Buttons = ({
  sxTouchableBtn,
  sxTextBtn,
  children,
}: TButtonsProps) => {
  return (
    <TouchableOpacity style={sxTouchableBtn}>
      <Text style={sxTextBtn}>{children}</Text>
    </TouchableOpacity>
  );
};
