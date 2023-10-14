import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../features/home/home-screen';

const Tab = createBottomTabNavigator();


const TAB_ICON_FOCUSED = {
  Restaurants: 'restaurant',
  Map: 'map',
  SettingsScreen: 'settings',
};

const TAB_ICON_OUTLINE = {
  Restaurants: 'restaurant-outline',
  Map: 'map-outline',
  SettingsScreen: 'settings-outline',
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
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'gray',
};
};

const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={HomeScreen} />
        </Tab.Navigator>
    </NavigationContainer>
);

export default AppNavigator;