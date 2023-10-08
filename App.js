import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider, createTheme, lightColors } from "@rneui/themed";
import { Button } from "@rneui/themed";
import Header from "./components/header/header-component";

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
  darkColors: {
    primary: "#000",
  },
  mode: "light",
});

export default function App() {
  return (
    <SafeAreaProvider>
      <Header />
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Text>Pronto tendras todo el contenido de lactancia materna en la palma de tu mano!</Text>
          <Button>Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Error</Button>
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
