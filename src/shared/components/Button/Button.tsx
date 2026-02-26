import { ReactElement } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type TButtonsProps = {
  sxTouchableBtn: object;
  sxTextBtn: object;
  children: React.ReactNode | string | ReactElement;
  onPress?: () => void;
};

export const Buttons = ({
  sxTouchableBtn,
  sxTextBtn,
  children,
  onPress,
}: TButtonsProps) => {
  return (
    <TouchableOpacity style={sxTouchableBtn} onPress={onPress}>
      <Text style={sxTextBtn}>{children}</Text>
    </TouchableOpacity>
  );
};
