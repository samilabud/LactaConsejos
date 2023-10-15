import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeScreen from "../../features/home/home-screen";

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
  return {
    tabBarIcon: tabBarIcon(route.name),
    headerShown: false,
    tabBarActiveTintColor: "#000",
    tabBarInactiveTintColor: "#445F5F",
    tabBarInactiveBackgroundColor: "#EED1CA",
    tabBarStyle: {
      paddingHorizontal: 5,
      backgroundColor: "#F3D1D4",
    },
  };
};

const AppNavigator = () => (
  <NavigationContainer theme={MyTheme}>
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Sobre mi" component={HomeScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
