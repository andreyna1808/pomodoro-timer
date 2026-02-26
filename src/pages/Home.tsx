import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { TScreenDefinitionsProps } from "../AppRoute";
import { Theme } from "../shared/themes/Theme";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { MaterialIcons } from "@expo/vector-icons";
import { Texts } from "../shared/components/Texts/Texts";
import { Progress } from "../shared/components/Progress/Progress";
import { Buttons } from "../shared/components/Button/Button";
import { Pomodoros } from "../shared/components/Pomodoros/Pomodoros";

export const Home = () => {
  const navigation = useNavigation<TScreenDefinitionsProps>();

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => navigation.navigate("Settings")}
      >
        <MaterialIcons size={28} name="settings" color={Theme.colors.divider} />
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Texts sxText={styles.titleText}>Pomodoro</Texts>
        </View>

        <View style={styles.stateContainer}>
          <Texts sxText={styles.stateText}>Hora de se concentrar</Texts>
          <Texts sxText={styles.stateText}>Pausa curta</Texts>
          <Texts sxText={styles.stateText}>Pausa longa</Texts>
          <Texts sxText={styles.stateText}>Cronometro em pausa</Texts>
        </View>

        <Progress
          sxProgressContainer={styles.progressContainer}
          sxProgressText={styles.progressText}
          fill={10}
        >
          25:00
        </Progress>

        <View style={styles.buttonContainer}>
          <Buttons
            sxTouchableBtn={styles.primaryButton}
            sxTextBtn={styles.primaryButtonText}
          >
            Iniciar
          </Buttons>
        </View>

        <View style={styles.buttonContainer}>
          <Buttons
            sxTouchableBtn={styles.primaryButton}
            sxTextBtn={styles.primaryButtonText}
          >
            Pausar
          </Buttons>

          <Buttons
            sxTouchableBtn={styles.secondaryButton}
            sxTextBtn={styles.secondaryButtonText}
          >
            Parar
          </Buttons>
        </View>

        <View style={styles.buttonContainer}>
          <Buttons
            sxTouchableBtn={styles.primaryButton}
            sxTextBtn={styles.primaryButtonText}
          >
            Continuar
          </Buttons>

          <Buttons
            sxTouchableBtn={styles.secondaryButton}
            sxTextBtn={styles.secondaryButtonText}
          >
            Reiniciar
          </Buttons>
        </View>

        <Pomodoros />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    gap: 36,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  settingsButton: {
    alignSelf: "flex-end",
  },
  primaryButton: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 55,
  },
  primaryButtonText: {
    color: Theme.colors.text,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.interRegular,
  },
  secondaryButton: {
    borderWidth: 2,
    borderRadius: 55,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderColor: Theme.colors.primary,
  },
  secondaryButtonText: {
    color: Theme.colors.text,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.interRegular,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  progressContainer: {
    alignItems: "center",
  },
  progressText: {
    color: Theme.colors.text,
    fontSize: Theme.fontSizes.title,
    fontFamily: Theme.fonts.interBold,
  },
  titleContainer: {
    alignItems: "center",
  },
  titleText: {
    color: Theme.colors.text,
    fontSize: Theme.fontSizes.title,
    fontFamily: Theme.fonts.interBold,
  },
  stateContainer: {
    alignItems: "center",
  },
  stateText: {
    color: Theme.colors.text,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.interRegular,
  },
});
