import { Text, View, StyleSheet } from "react-native";
import { Theme } from "../../themes/Theme";

type TPomodorosProps = {};

export const Pomodoros = ({}: TPomodorosProps) => {
  return (
    <View style={styles.pomodorosContainer}>
      <Text style={styles.pomodorosText}>Pomodoros:</Text>

      <View style={styles.pomodorosIndicatorComplete} />
      <View style={styles.pomodorosIndicatorComplete} />
      <View style={styles.pomodorosIndicator} />
      <View style={styles.pomodorosIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  pomodorosContainer: {
    gap: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  pomodorosText: {
    color: Theme.colors.text,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.interRegular,
  },
  pomodorosIndicator: {
    width: 20,
    height: 20,
    borderRadius: "100%",
    backgroundColor: Theme.colors.divider,
  },
  pomodorosIndicatorComplete: {
    width: 20,
    height: 20,
    borderRadius: "100%",
    backgroundColor: Theme.colors.primary,
  },
});
