import { View } from "react-native";
import React, { useState } from "react";
import { Texts } from "../../shared/components/Texts/Texts";
import { Progress } from "../../shared/components/Progress/Progress";
import { Pomodoros } from "../../shared/components/Pomodoros/Pomodoros";
import { ReturnBtn } from "../../shared/components/Header/ReturnBtn";
import { styles } from "./styles";
import { RenderHomeControls } from "../../shared/components/Home/home.controls";
import { RenderHomeStatusText } from "../../shared/components/Home/home.texts";

export const Home = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <ReturnBtn nameIcon="settings" nameNavigation="Settings" />

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Texts sxText={styles.titleText}>Pomodoro</Texts>
        </View>

        <View style={styles.stateContainer}>
          <RenderHomeStatusText
            isRunning={isRunning}
            isPaused={isPaused}
            textStyle={styles.stateText}
          />
        </View>

        <Progress
          sxProgressContainer={styles.progressContainer}
          sxProgressText={styles.progressText}
          fill={10}
        >
          25:00
        </Progress>

        <RenderHomeControls
          isRunning={isRunning}
          isPaused={isPaused}
          styles={styles}
          setIsRunning={setIsRunning}
          setIsPaused={setIsPaused}
        />

        <Pomodoros />
      </View>
    </View>
  );
};
