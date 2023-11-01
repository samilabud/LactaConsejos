import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeScreen from "../../features/home/home-screen";
import AboutMe from "../../features/profile/aboutme-screen";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import ArticleNavigator from "../../screens/articles/article-stack-screen";
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

const AppNavigator = () => (
  <NavigationContainer theme={MyTheme}>
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Inicio" component={ArticleNavigator} />
      <Tab.Screen name="Sobre mi" component={AboutMe} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
