import { Image } from "@rneui/themed";
import { backendBaseURL } from "../../global";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const ArticlesList = ({ category, navigation }) => {
  const [dataArticles, setDataArticles] = useState(null);
  const { colors } = lightTheme;

  useEffect(() => {
    const loadArticlesByCategory = async (categoryName) => {
      if (!categoryName) {
        return;
      }
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
      marginBottom: 24,
    },
    titleContainer: {
      flex: 1,
      width: "auto",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingBottom: 8,
      paddingTop: 4,
      flexWrap: "nowrap",
    },
    title: {
      fontSize: 15,
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: 0.5,
      color: colors.text,
      flex: 1,
    },
    seeAll: {
      color: colors.accent,
      fontSize: 14,
      fontWeight: "600",
    },
    articlesContainer: {
      width: "auto",
      height: 200,
      marginTop: 8,
    },
    listContainer: {
      paddingLeft: 16,
      paddingRight: 8,
      height: "auto",
    },
    list: {
      width: "auto",
      height: "auto",
    },
    article: {
      marginRight: 12,
      height: 180,
      width: 165,
      backgroundColor: colors.surfaceBackgroundColor,
      borderRadius: 12,
      borderWidth: 1.5,
      borderColor: colors.borderColor,
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    articleImage: {
      width: "100%",
      height: 130,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    articleTextContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.onSurface,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      minHeight: 50,
      justifyContent: "center",
    },
    articleText: {
      color: colors.accent,
      fontSize: 13,
      fontWeight: "600",
      textAlign: "left",
      lineHeight: 18,
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
              >
                <Image
                  source={{
                    uri: `data:image/png;base64,${item.image}`,
                  }}
                  containerStyle={styles.articleImage}
                  PlaceholderContent={
                    <ActivityIndicator color={colors.accent} size={"large"} />
                  }
                  transition={true}
                  transitionDuration={500}
                  resizeMode="cover"
                />
                <View style={styles.articleTextContainer}>
                  <Text style={styles.articleText} numberOfLines={2}>
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
