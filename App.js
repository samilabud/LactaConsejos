import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Platform, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider, createTheme, lightColors } from "@rneui/themed";
import { Button } from "@rneui/themed";
import Header from "./components/header/header-component";
import ArticlesList from "./components/posts/articles-list-component";
import ConferencesList from "./components/posts/conference-list-component";

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
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Header />
          <ScrollView style={styles.articlesContainer}>
            <View style={styles.postContainer}>
              <ArticlesList category={1} />
            </View>
            <View style={styles.postContainer}>
              <ConferencesList />
            </View>
            <View style={styles.postContainer}>
              <ArticlesList category={2} />
            </View>
            <View style={styles.postContainer}>
              <ArticlesList category={3} />
            </View>
            <View style={styles.postContainer}>
              <ArticlesList category={4} />
            </View>
          </ScrollView>
          {/* 
          <Button>Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Error</Button>
          <StatusBar style="auto" /> */}
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2D9DC',
  },
  articlesContainer: {
    flex: 1,
  },
  postContainer: {
    flex: 1,
  }
});
