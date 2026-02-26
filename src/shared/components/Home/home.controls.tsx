import React, { Dispatch, SetStateAction } from "react";
import { ViewStyle, TextStyle } from "react-native";
import { View } from "react-native";
import { Buttons } from "../Button/Button";

type HomeStylesProps = {
  primaryButton: ViewStyle;
  primaryButtonText: TextStyle;
  secondaryButton: ViewStyle;
  secondaryButtonText: TextStyle;
  buttonContainer: ViewStyle;
};

type renderHomeControlsProps = {
  isRunning: boolean;
  isPaused: boolean;
  styles: HomeStylesProps;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setIsPaused: Dispatch<SetStateAction<boolean>>;
};

export function RenderHomeControls({
  isRunning,
  isPaused,
  styles,
  setIsRunning,
  setIsPaused,
}: renderHomeControlsProps) {
  switch (true) {
    case !isRunning && !isPaused:
      return (
        <Buttons
          sxTouchableBtn={styles.primaryButton}
          sxTextBtn={styles.primaryButtonText}
          onPress={() => setIsRunning(true)}
        >
          Iniciar
        </Buttons>
      );

    case isRunning && !isPaused:
      return (
        <View style={styles.buttonContainer}>
          <Buttons
            sxTouchableBtn={styles.primaryButton}
            sxTextBtn={styles.primaryButtonText}
            onPress={() => setIsPaused(true)}
          >
            Pausar
          </Buttons>

          <Buttons
            sxTouchableBtn={styles.secondaryButton}
            sxTextBtn={styles.secondaryButtonText}
            onPress={() => setIsRunning(false)}
          >
            Parar
          </Buttons>
        </View>
      );

    case isRunning && isPaused:
      return (
        <View style={styles.buttonContainer}>
          <Buttons
            sxTouchableBtn={styles.primaryButton}
            sxTextBtn={styles.primaryButtonText}
            onPress={() => setIsPaused(false)}
          >
            Continuar
          </Buttons>

          <Buttons
            sxTouchableBtn={styles.secondaryButton}
            sxTextBtn={styles.secondaryButtonText}
            onPress={() => {
              setIsRunning(false);
              setIsPaused(false);
            }}
          >
            Reiniciar
          </Buttons>
        </View>
      );

    default:
      return null;
  }
}
