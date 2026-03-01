type AppStateProps = {
  time: number;
  isPaused: boolean;
  isRunning: boolean;
  stepIndicator: 1 | 2 | 3 | 4;
  counterCircleTime: number;
  currentFocusCircleTime: number;
  currentLongBreakCircleTime: number;
  currentShortBreakCircleTime: number;
  currentStatus: "focus" | "short_break" | "long_break";
};

export const updateStateByElapsedTime = (
  appState: AppStateProps,
): AppStateProps => {
  if (!appState.isRunning || appState.isPaused) return appState;

  const now = Date.now();
  const elapsedSeconds = Math.floor((now - (appState.time ?? now)) / 1000);
  if (elapsedSeconds <= 0) return appState;

  let remaining = appState.counterCircleTime;
  let timeLeft = remaining - elapsedSeconds;
  let currentStatus = appState.currentStatus;
  let stepIndicator = appState.stepIndicator;

  const advanceCycle = () => {
    if (currentStatus === "focus") {
      if (stepIndicator < 4) {
        stepIndicator = (stepIndicator + 1) as 1 | 2 | 3 | 4;
        currentStatus = "short_break";
        return appState.currentShortBreakCircleTime;
      } else {
        stepIndicator = 1;
        currentStatus = "long_break";
        return appState.currentLongBreakCircleTime;
      }
    }

    if (currentStatus === "short_break" || currentStatus === "long_break") {
      currentStatus = "focus";
      return appState.currentFocusCircleTime;
    }

    return remaining;
  };

  while (timeLeft <= 0) {
    const overflow = Math.abs(timeLeft);
    const nextTime = advanceCycle();

    timeLeft = nextTime - overflow;
  }

  return {
    ...appState,
    stepIndicator,
    time: now,
    currentStatus,
    counterCircleTime: timeLeft,
  };
};
