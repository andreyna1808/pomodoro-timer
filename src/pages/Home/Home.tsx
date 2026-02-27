import { Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
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
  const [stepIndicator, setStepIndicator] = useState<1 | 2 | 3 | 4>(1);

  const [currentStatus, setCurrentStatus] = useState<
    "focus" | "short_break" | "long_break" | "paused"
  >("focus");

  const [currentFocusCircleTime, setCurrentFocusCircleTime] = useState(25 * 60);
  const [currentShortBreakCircleTime, setCurrentShortBreakCircleTime] =
    useState(5 * 60);
  const [currentLongBreakCircleTime, setCurrentLongBreakCircleTime] = useState(
    10 * 60,
  );
  const [counterCircleTime, setCounterCircleTime] = useState(12.5 * 60);

  useEffect(() => {
    const ref = setInterval(() => {
      if (isRunning && !isPaused) {
        setCounterCircleTime((prev) => (prev <= 0 ? prev : prev - 1));
      }
    }, 1000);

    return () => clearInterval(ref);
  }, [isRunning, isPaused]);

  useEffect(() => {
    switch (currentStatus) {
      case "focus": {
        if (counterCircleTime > 0) break;

        if (stepIndicator < 4) {
          setStepIndicator((old) => (old + 1) as 1);
          setCurrentStatus("short_break");
          setCounterCircleTime(currentShortBreakCircleTime);
        } else {
          setStepIndicator(1);
          setCurrentStatus("long_break");
          setCounterCircleTime(currentLongBreakCircleTime);
        }
        break;
      }
      case "short_break":
      case "long_break":
        if (counterCircleTime <= 0) {
          setCurrentStatus("focus");
          setCounterCircleTime(currentFocusCircleTime);
        }
      default:
        break;
    }
  }, [
    counterCircleTime,
    currentStatus,
    stepIndicator,
    currentShortBreakCircleTime,
    currentLongBreakCircleTime,
  ]);

  const timeProgress = useMemo(() => {
    switch (currentStatus) {
      case "focus":
        return 100 - (counterCircleTime / currentFocusCircleTime) * 100;
      case "short_break":
        return 100 - (counterCircleTime / currentShortBreakCircleTime) * 100;
      case "long_break":
        return 100 - (counterCircleTime / currentLongBreakCircleTime) * 100;
      default:
        return 0;
    }
  }, [
    currentStatus,
    counterCircleTime,
    currentFocusCircleTime,
    currentLongBreakCircleTime,
    currentShortBreakCircleTime,
  ]);

  return (
    <View style={styles.mainContainer}>
      <ReturnBtn nameIcon="settings" nameNavigation="Settings" />

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Texts sxText={styles.titleText}>Pomodoro</Texts>
        </View>

        <View style={styles.stateContainer}>
          <RenderHomeStatusText
            currentStatus={currentStatus}
            textStyle={styles.stateText}
          />
        </View>

        <Progress
          sxProgressContainer={styles.progressContainer}
          sxProgressText={styles.progressText}
          fill={timeProgress}
        >
          <Text style={styles.progressText}>
            {Math.floor(counterCircleTime / 60)}:{counterCircleTime % 60}
          </Text>
        </Progress>

        <RenderHomeControls
          counterCircleTime={counterCircleTime}
          isRunning={isRunning}
          isPaused={isPaused}
          styles={styles}
          setIsPaused={setIsPaused}
          setIsRunning={setIsRunning}
          setStepIndicator={setStepIndicator}
          setCurrentStatus={setCurrentStatus}
          setCounterCircleTime={setCounterCircleTime}
        />

        <Pomodoros stepIndicator={stepIndicator} />
      </View>
    </View>
  );
};
