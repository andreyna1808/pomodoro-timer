import { StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "../../themes/Theme";
import { MaterialIcons } from "@expo/vector-icons";
import { TScreenDefinitionsProps } from "../../../AppRoute";
import { useNavigation } from "@react-navigation/native";

type ReturnBtnProps = {
  nameIcon: "settings" | "close";
  nameNavigation: "Home" | "Settings";
};

export const ReturnBtn = ({ nameIcon, nameNavigation }: ReturnBtnProps) => {
  const navigation = useNavigation<TScreenDefinitionsProps>();

  return (
    <TouchableOpacity
      style={styles.settingsButton}
      onPress={() => navigation.navigate(nameNavigation)}
    >
      <MaterialIcons size={28} name={nameIcon} color={Theme.colors.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingsButton: {
    alignSelf: "flex-end",
  },
});
