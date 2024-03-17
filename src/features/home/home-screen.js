import ArticlesList from "../article/articles-list";
import Header from "../../components/header/header-component";
import React from "react";
import SkeletonIndicator from "../../components/indicators/skeleton-indicator";
import { backendBaseURL } from "../../global";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

const HomeScreen = ({ navigation }) => {
  const [dataCategories, setDataCategories] = useState(false);
  const { colors } = lightTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    articlesContainer: {
      flex: 1,
    },
    postContainer: {
      flex: 1,
      marginTop: 10,
    },
  });
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetch(`${backendBaseURL}/articles/categories`, {
          mode: "cors",
        });
        setDataCategories(await response?.json());
      } catch (err) {
        console.log(err, "Could not load the categories");
      }
    };
    loadCategories();
  }, []);
  const windowDimensions = Dimensions.get("window");
  const skeletonWidth = Math.round(windowDimensions.width / 2) - 20;
  const skeletonHeigth = skeletonWidth;
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {dataCategories ? (
        <ScrollView style={styles.articlesContainer}>
          {dataCategories.map((category, idx) => (
            <View style={styles.postContainer} key={idx}>
              <ArticlesList category={category} navigation={navigation} />
            </View>
          ))}
        </ScrollView>
      ) : (
        <ScrollView style={styles.articlesContainer}>
          <SkeletonIndicator
            blocks={6}
            width={skeletonWidth}
            height={skeletonHeigth}
          />
        </ScrollView>
      )}
    </View>
  );
};
export default HomeScreen;
