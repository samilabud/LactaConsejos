import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import HomeScreen from '../../features/home/home-screen';

const Tab = createBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'black'
    },
  };

const TAB_ICON_FOCUSED = {
  Home: 'home',
  AboutMe: 'person',
};

const TAB_ICON_OUTLINE = {
    Home: 'home-outline',
    AboutMe: 'person-outline',
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
    tabBarActiveTintColor: '#000',
    tabBarInactiveTintColor: '#77999F',
    tabBarInactiveBackgroundColor: '#EED1CA',
    tabBarStyle: {
        paddingHorizontal: 5,
        backgroundColor: '#F3D1D4',
    },
};
};

const AppNavigator = () => (
    <NavigationContainer  theme={MyTheme}>
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="AboutMe" component={HomeScreen} />
        </Tab.Navigator>
    </NavigationContainer>
);

export default AppNavigator;