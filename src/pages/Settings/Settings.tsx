import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ReturnBtn } from "../../shared/components/Header/ReturnBtn";
import { styles } from "./styles";

export const Settings = () => {
  const [focusPeriod, setFocusPeriod] = React.useState(25);
  const [shortBreak, setShortBreak] = React.useState(5);
  const [longBreak, setLongBreak] = React.useState(15);
  const [notifications, setNotifications] = React.useState(true);

  return (
    <View style={styles.mainContainer}>
      <ReturnBtn nameIcon="close" nameNavigation="Home" />

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Configurações</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formFieldContainer}>
          <Text style={styles.formFieldLabel}>Periodo de foco</Text>

          <View style={styles.formFieldButtons}>
            <TouchableOpacity
              style={
                focusPeriod === 25
                  ? styles.primaryButton
                  : styles.secondaryButton
              }
              onPress={() => setFocusPeriod(25)}
            >
              <Text style={styles.primaryButtonText}>25 min</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                focusPeriod === 35
                  ? styles.primaryButton
                  : styles.secondaryButton
              }
              onPress={() => setFocusPeriod(35)}
            >
              <Text style={styles.primaryButtonText}>35 min</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                focusPeriod === 50
                  ? styles.primaryButton
                  : styles.secondaryButton
              }
              onPress={() => setFocusPeriod(50)}
            >
              <Text style={styles.primaryButtonText}>50 min</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formFieldContainer}>
          <Text style={styles.formFieldLabel}>Pausa curta</Text>

          <View style={styles.formFieldButtons}>
            <TouchableOpacity
              style={
                shortBreak === 3 ? styles.primaryButton : styles.secondaryButton
              }
              onPress={() => setShortBreak(3)}
            >
              <Text style={styles.primaryButtonText}>3 min</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                shortBreak === 5 ? styles.primaryButton : styles.secondaryButton
              }
              onPress={() => setShortBreak(5)}
            >
              <Text style={styles.primaryButtonText}>5 min</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                shortBreak === 7 ? styles.primaryButton : styles.secondaryButton
              }
              onPress={() => setShortBreak(7)}
            >
              <Text style={styles.primaryButtonText}>7 min</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formFieldContainer}>
          <Text style={styles.formFieldLabel}>Paula longa</Text>

          <View style={styles.formFieldButtons}>
            <TouchableOpacity
              style={
                longBreak === 10 ? styles.primaryButton : styles.secondaryButton
              }
              onPress={() => setLongBreak(10)}
            >
              <Text style={styles.primaryButtonText}>10 min</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                longBreak === 15 ? styles.primaryButton : styles.secondaryButton
              }
              onPress={() => setLongBreak(15)}
            >
              <Text style={styles.primaryButtonText}>15 min</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                longBreak === 20 ? styles.primaryButton : styles.secondaryButton
              }
              onPress={() => setLongBreak(20)}
            >
              <Text style={styles.primaryButtonText}>20 min</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formFieldContainer}>
          <Text style={styles.formFieldLabel}>Notificações</Text>

          <View style={styles.formFieldButtons}>
            <TouchableOpacity
              style={
                notifications ? styles.primaryButton : styles.secondaryButton
              }
              onPress={() => setNotifications(true)}
            >
              <Text style={styles.primaryButtonText}>Ativado</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                notifications ? styles.secondaryButton : styles.primaryButton
              }
              onPress={() => setNotifications(false)}
            >
              <Text style={styles.primaryButtonText}>Desativado</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
