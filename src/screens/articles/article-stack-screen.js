import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import HomeScreen from "../../features/home/home-screen";
import ArticleDetailScreen from "../../features/article/article-details-screen";
import ArticleSearch from "../../features/article/article-search";
import NotFoundScreen from "../404/NotFound";

const ArticleStack = createStackNavigator();

const ArticleNavigator = () => {
  return (
    <ArticleStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
      initialRouteName="Home"
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
      <ArticleStack.Screen name="NotFound" component={NotFoundScreen} />
    </ArticleStack.Navigator>
  );
};
export default ArticleNavigator;
