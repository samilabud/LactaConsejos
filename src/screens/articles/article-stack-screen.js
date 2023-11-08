import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import HomeScreen from "../../features/home/home-screen";
import ArticleDetailScreen from "../../features/article/article-details-screen";
import ArticleSearch from "../../features/article/article-search";

const ArticleStack = createStackNavigator();

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

      <ArticleStack.Screen
        name="ArticleStackSearch"
        component={ArticleSearch}
      />
    </ArticleStack.Navigator>
  );
};
export default ArticleNavigator;
