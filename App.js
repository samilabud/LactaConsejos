import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/infrastructure/navigation/app.navigator";
import { Provider as PaperProvider } from "react-native-paper";
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

export function ErrorBoundary(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>{props.error.message}</Text>
      <Text onPress={props.retry}>Try Again?</Text>
    </View>
  );
}
