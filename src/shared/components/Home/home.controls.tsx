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
  counterCircleTime: number;
  updateLocalStorage: Function;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setIsPaused: Dispatch<SetStateAction<boolean>>;
  setStepIndicator: Dispatch<SetStateAction<1 | 2 | 3 | 4>>;
  setCounterCircleTime: Dispatch<SetStateAction<number>>;
  setCurrentStatus: Dispatch<
    SetStateAction<"focus" | "short_break" | "long_break" | "paused">
  >;
};

export const RenderHomeControls = ({
  counterCircleTime,
  isRunning,
  isPaused,
  styles,
  updateLocalStorage,
  setIsRunning,
  setIsPaused,
  setStepIndicator,
  setCurrentStatus,
  setCounterCircleTime,
}: renderHomeControlsProps) => {
  const onPressStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setCounterCircleTime(counterCircleTime);
    setStepIndicator(1);
    setCurrentStatus("focus");
    updateLocalStorage({
      isPausedUpdate: false,
      isRunningUpdate: false,
      stepIndicatorUpdate: 1,
      currentStatusUpdate: "focus",
      counterCircleTimeUpdate: counterCircleTime,
    });
  };

  const onPressPaused = () => {
    setIsPaused(true);
    setCurrentStatus("paused");
    updateLocalStorage({ isPausedUpdate: true });
  };

  switch (true) {
    case !isRunning && !isPaused:
      return (
        <Buttons
          sxTouchableBtn={styles.primaryButton}
          sxTextBtn={styles.primaryButtonText}
          onPress={() => {
            setIsRunning(true);
            updateLocalStorage({ isRunningUpdate: true });
          }}
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
            onPress={onPressPaused}
          >
            Pausar
          </Buttons>

          <Buttons
            sxTouchableBtn={styles.secondaryButton}
            sxTextBtn={styles.secondaryButtonText}
            onPress={onPressStop}
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
            onPress={() => {
              setIsPaused(false);
              updateLocalStorage({ isPausedUpdate: false });
            }}
          >
            Continuar
          </Buttons>

          <Buttons
            sxTouchableBtn={styles.secondaryButton}
            sxTextBtn={styles.secondaryButtonText}
            onPress={() => {
              setIsRunning(false);
              setIsPaused(false);

              updateLocalStorage({
                isPausedUpdate: false,
                isRunningUpdate: false,
              });
            }}
          >
            Reiniciar
          </Buttons>
        </View>
      );

    default:
      return null;
  }
};
