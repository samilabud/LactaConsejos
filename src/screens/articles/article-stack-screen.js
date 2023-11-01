import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const ArticleStack = createStackNavigator();
import HomeScreen from "../../features/home/home-screen";
import ArticleDetailScreen from "../../features/article/article-details-screen";

const ArticleNavigator = () => {
  return (
    <ArticleStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <ArticleStack.Screen name="Home" component={HomeScreen} />
      <ArticleStack.Screen
        name="ArticleStackDetails"
        component={ArticleDetailScreen}
      />
    </ArticleStack.Navigator>
  );
};
export default ArticleNavigator;
