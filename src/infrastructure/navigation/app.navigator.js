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
    {/* <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Inicio" component={ArticleNavigator} />
      <Tab.Screen name="Sobre mi" component={AboutMe} />
    </Tab.Navigator> */}
  </NavigationContainer>
);

export default AppNavigator;
