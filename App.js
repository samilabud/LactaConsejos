import AppNavigator from "./src/infrastructure/navigation/app.navigator";
import { Provider as PaperProvider } from "react-native-paper";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { lightTheme } from "./src/infrastructure/theme/default.theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={lightTheme}>
        <AppNavigator />
        <StatusBar style="auto" />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
