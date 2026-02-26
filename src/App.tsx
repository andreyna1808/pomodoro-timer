import { Text, View } from "react-native";
import { Home } from "./pages/Home/Home";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { AppRoutes } from "./AppRoute";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "./shared/themes/Theme";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync(); // Faz o aplicarivo travar e só permite caso a gente de um .hide para destravar

export default function App() {
  const [loaded, error] = useFonts({
    InterRegular: Inter_400Regular,
    InterBold: Inter_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hide(); // Só desenha a tela quando as fontes estiverem carregadas
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.colors.background }}>
      <StatusBar style="light" />
      <AppRoutes />
    </SafeAreaView>
  );
}
