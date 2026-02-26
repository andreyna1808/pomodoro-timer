import { View } from "react-native";
import React from "react";
import { Texts } from "../../shared/components/Texts/Texts";
import { Progress } from "../../shared/components/Progress/Progress";
import { Buttons } from "../../shared/components/Button/Button";
import { Pomodoros } from "../../shared/components/Pomodoros/Pomodoros";
import { ReturnBtn } from "../../shared/components/Header/ReturnBtn";
import { styles } from "./styles";

export const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <ReturnBtn nameIcon="settings" nameNavigation="Settings" />

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
