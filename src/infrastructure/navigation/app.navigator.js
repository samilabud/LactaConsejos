import ArticleNavigator from "../../screens/articles/article-stack-screen";
import React from "react";
import { Text } from "react-native";
import { linkingConfig } from "../navigation/linking.config";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "black",
  },
};

const AppNavigator = () => (
  <NavigationContainer
    linking={linkingConfig}
    theme={MyTheme}
    fallback={<Text>Loading...</Text>}
  >
    <ArticleNavigator />
  </NavigationContainer>
);

export default AppNavigator;
