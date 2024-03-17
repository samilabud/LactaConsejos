import AboutMe from "../../features/profile/aboutme-screen";
import ArticleDetailScreen from "../../features/article/article-details-screen";
import ArticleSearch from "../../features/article/article-search";
import HomeScreen from "../../features/home/home-screen";
import { Ionicons } from "@expo/vector-icons";
import NotFoundScreen from "../404/NotFound";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const ArticleStack = createStackNavigator();

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
  // eslint-disable-next-line react/display-name
  ({ focused, size, color }) => {
    const iconName = focused
      ? TAB_ICON_FOCUSED[routeName]
      : TAB_ICON_OUTLINE[routeName];
    return <Ionicons name={iconName} size={size} color={color} />;
  };

const TabComponent = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Inicio" component={HomeScreen} />
    <Tab.Screen name="Sobre mi" component={AboutMe} />
  </Tab.Navigator>
);

const ArticleNavigator = () => {
  return (
    <ArticleStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <ArticleStack.Screen name="Home" component={TabComponent} />

      <ArticleStack.Screen
        name="ArticleStackDetails"
        component={ArticleDetailScreen}
      />

      <ArticleStack.Screen
        name="ArticleStackSearch"
        component={ArticleSearch}
      />
      <ArticleStack.Screen name="NotFound" component={NotFoundScreen} />
    </ArticleStack.Navigator>
  );
};
export default ArticleNavigator;
