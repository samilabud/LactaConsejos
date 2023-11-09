import { useState, useEffect } from "react";
import Header from "../../components/header/header-component";
import ArticlesList from "../article/articles-list";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import { backendBaseURL } from "../../global";

const HomeScreen = ({ navigation }) => {
  const [dataCategories, setDataCategories] = useState();
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
        console.log(err, `Could not load the categories`);
      }
    };
    loadCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <ActivityIndicator color={"red"} size={"large"} />
      )}
    </View>
  );
};
export default HomeScreen;
