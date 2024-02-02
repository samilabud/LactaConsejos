import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Image } from "@rneui/themed";
import { backendBaseURL } from "../../global";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import { CommonActions } from "@react-navigation/native";

const ArticlesList = ({ category, navigation, route }) => {
  const [dataArticles, setDataArticles] = useState(null);
  const { colors } = lightTheme;

  useEffect(() => {
    const loadArticlesByCategory = async (categoryName) => {
      try {
        let articles = await fetch(
          `${backendBaseURL}/articles/latest/${categoryName}`,
        );
        articles = await articles.json();
        setDataArticles(articles);
      } catch (err) {
        console.log(
          err,
          `Could not load articles from category ${categoryName}`,
        );
      }
    };
    loadArticlesByCategory(category);
  }, []);

  const styles = StyleSheet.create({
    articlesListContainer: {
      flex: 1,
      width: "auto",
    },
    titleContainer: {
      flex: 1,
      width: "auto",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingHorizontal: 12,
      paddingBottom: 4,
      flexWrap: "nowrap",
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
      color: colors.text,
    },
    seeAll: {
      color: colors.anchorText,
      fontVariant: "small-caps",
    },
    articlesContainer: {
      width: "auto",
      height: 180,
      marginTop: 10,
    },
    listContainer: {
      width: "auto",
      height: "auto",
      marginLeft: 10,
    },
    list: {
      width: "auto",
      height: "auto",
    },
    article: {
      flex: 1,
      marginLeft: 10,
      height: 165,
      width: 165,
    },
    articleImage: {
      flex: 1,
      aspectRatio: 1,
      width: "100%",
      height: "100%",
      borderRadius: 10,
      borderColor: colors.borderColor,
      borderWidth: 1,
      alignSelf: "center",
    },
    articleTextContainer: {
      flex: 1,
      position: "absolute",
      width: "97.8%",
      marginTop: 145,
      marginStart: 2,
      shadowOpacity: 0.8,
      shadowOffset: { width: 1, height: 5 },
      backgroundColor: colors.onSurface,
      opacity: 0.8,
      borderRadius: 7,
    },
    articleText: {
      color: colors.accent,
      fontSize: 14,
      fontWeight: "700",
      textAlign: "center",
    },
  });

  return (
    dataArticles && (
      <View style={styles.articlesListContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{category}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("ArticleStackSearch", { category })
            }
          >
            <Text style={styles.seeAll}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.articlesContainer}>
          <FlatList
            horizontal={true}
            data={dataArticles}
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            keyExtractor={(e) => e._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.article}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("ArticleStackDetails", item)}
                // onPress={() => goToArticle(navigation, item)}
              >
                <Image
                  source={{
                    uri: `data:image/png;base64,${item.image}`,
                  }}
                  containerStyle={styles.articleImage}
                  PlaceholderContent={
                    <ActivityIndicator color={"red"} size={"large"} />
                  }
                  transition={true}
                  transitionDuration={500}
                  resizeMode="contain"
                />
                <View style={styles.articleTextContainer}>
                  <Text style={styles.articleText} numberOfLines={1}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    )
  );
};

export default ArticlesList;
