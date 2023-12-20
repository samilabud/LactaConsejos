import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AboutMe from "../../features/profile/aboutme-screen";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import ArticleNavigator from "../../screens/articles/article-stack-screen";
import { linkingConfig } from "../navigation/linking.config";

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "black",
  },
};

const TAB_ICON_FOCUSED = {
  Inicio: "home",
  "Sobre mi": "person",
};

const TAB_ICON_OUTLINE = {
  Inicio: "home-outline",
  "Sobre mi": "person-outline",
};

const tabBarIcon =
  (routeName) =>
  ({ focused, size, color }) => {
    const iconName = focused
      ? TAB_ICON_FOCUSED[routeName]
      : TAB_ICON_OUTLINE[routeName];
    return <Ionicons name={iconName} size={size} color={color} />;
  };

const screenOptions = ({ route }) => {
  const { colors } = lightTheme;
  return {
    tabBarIcon: tabBarIcon(route.name),
    headerShown: false,
    tabBarActiveTintColor: colors.activeTabTint,
    tabBarInactiveTintColor: colors.inactiveTabTint,
    tabBarInactiveBackgroundColor: colors.inactiveTabBackground,
    tabBarStyle: {
      paddingHorizontal: 5,
      backgroundColor: colors.surfaceBackgroundColor,
    },
  };
};

//https://reactnavigation.org/docs/navigation-state/
const state = {
  type: "stack",
  key: "stack-1",
  routeNames: ["Inicio", "Sobre mi"],
  routes: [
    {
      key: "home-1",
      name: "Inicio",
      state: {
        key: "articles-1",
        routeNames: ["Home", "ArticleStackDetails", "ArticleStackSearch"],
        routes: [
          { key: "home-2", name: "Home" },
          { key: "details-1", name: "ArticleStackDetails" },
          { key: "search-1", name: "ArticleStackSearch" },
        ],
        index: 0,
      },
    },
    { key: "aboutme-1", name: "Sobre mi" },
  ],
  index: 1,
  stale: false,
};

const AppNavigator = () => (
  <NavigationContainer
    linking={linkingConfig}
    theme={MyTheme}
    fallback={<Text>Loading...</Text>}
  >
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Inicio" component={ArticleNavigator} />
      <Tab.Screen name="Sobre mi" component={AboutMe} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
