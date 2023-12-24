import { Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import ArticleNavigator from "../../screens/articles/article-stack-screen";
import { linkingConfig } from "../navigation/linking.config";

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
