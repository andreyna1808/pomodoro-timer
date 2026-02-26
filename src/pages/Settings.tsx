import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { TScreenDefinitionsProps } from "../AppRoute";
import { Theme } from "../shared/themes/Theme";
import React from "react";
import { ReturnBtn } from "../shared/components/Header/ReturnBtn";

export const Settings = () => {
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
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>15 min</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>25 min</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>35 min</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formFieldContainer}>
          <Text style={styles.formFieldLabel}>Pausa curta</Text>

          <View style={styles.formFieldButtons}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>3 min</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>5 min</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>7 min</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formFieldContainer}>
          <Text style={styles.formFieldLabel}>Paula longa</Text>

          <View style={styles.formFieldButtons}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>10 min</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>15 min</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>20 min</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formFieldContainer}>
          <Text style={styles.formFieldLabel}>Notificações</Text>

          <View style={styles.formFieldButtons}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Ativado</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Desativado</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  primaryButton: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
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
    paddingHorizontal: 16,
    borderColor: Theme.colors.divider,
    backgroundColor: Theme.colors.divider,
  },
  secondaryButtonText: {
    color: Theme.colors.text,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.interRegular,
  },
  formContainer: {
    marginTop: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "80%",
  },
  titleContainer: {
    alignItems: "center",
  },
  titleText: {
    color: Theme.colors.text,
    fontSize: Theme.fontSizes.title,
    fontFamily: Theme.fonts.interBold,
  },
  formFieldContainer: {
    gap: 8,
    width: "100%",
  },
  formFieldLabel: {
    color: Theme.colors.text,
    fontSize: Theme.fontSizes.label,
    fontFamily: Theme.fonts.interRegular,
  },
  formFieldButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
