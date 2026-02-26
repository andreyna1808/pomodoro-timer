import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Theme } from "../../themes/Theme";
import { ReactElement } from "react";

type TProgressProps = {
  sxProgressContainer: object;
  sxProgressText: object;
  children: React.ReactNode | string | ReactElement;
  fill: number;
};

export const Progress = ({
  sxProgressContainer,
  sxProgressText,
  children,
  fill,
}: TProgressProps) => {
  return (
    <View style={sxProgressContainer}>
      <AnimatedCircularProgress
        size={160}
        width={7}
        fill={fill}
        tintColor={Theme.colors.primary}
        backgroundColor={Theme.colors.divider}
        rotation={0}
        children={() => <Text style={sxProgressText}>{children}</Text>}
      />
    </View>
  );
};
