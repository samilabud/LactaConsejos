import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Image, Input, Icon } from "@rneui/themed";
import * as Font from "expo-font";
import { backendBaseURL } from "../../global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { lightTheme } from "../../infrastructure/theme/default.theme";

const theLobsterFont = {
  "Lobster-Regular": require("../../../assets/fonts/Lobster-Regular.ttf"),
};

const ArticleSearch = ({ route, navigation }) => {
  const [search, setDataSearch] = useState();
  const [dataArticles, setDataArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { colors } = lightTheme;
  const [fontLoaded] = Font.useFonts(theLobsterFont);

  const category = route.params?.category;
  const titlePage = category ? category : "Buscar contenido";

  const loadArticlesBySearch = async (category) => {
    setIsLoading(true);
    if (!search && !category) {
      setIsLoading(false);
      return;
    }
    try {
      let articles = await fetch(`${backendBaseURL}/articles/search/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search, category }),
      });
      articles = await articles.json();
      setDataArticles(articles);
      setIsLoading(false);
    } catch (err) {
      console.log(
        err,
        `Could not load articles from category ${category} and search ${search}, url: ${backendBaseURL}`,
      );
    }
  };

  useEffect(() => {
    loadArticlesBySearch(category);
  }, []);

  useEffect(() => {
    loadArticlesBySearch(category);
  }, [search]);

  const styles = StyleSheet.create({
    articleContainer: {
      flex: 1,
    },
    imageBackgroundContainer: {
      flex: 0.3,
      justifyContent: "center",
      alignContent: "space-between",
      justifyContent: "space-between",
      minHeight: 120,
    },
    topNavigationContainer: {
      width: "auto",
      paddingLeft: 10,
    },
    touchableContainer: {
      width: "auto",
      flexWrap: "wrap",
      flexDirection: "row",
    },
    goBackIcon: {
      color: colors.iconColor,
    },
    goBackText: {
      marginLeft: 10,
      marginTop: 2,
      color: colors.accent,
    },
    searchTitleContainer: {
      backgroundColor: colors.background + "30",
      padding: 10,
      marginBottom: 60,
      minHeight: 30,
    },
    searchTitle: {
      color: colors.text,
      fontSize: 32,
      fontFamily: "Lobster-Regular",
    },
    listContainer: {
      width: "auto",
      height: "auto",
    },
    list: {
      width: "auto",
      height: "auto",

      padding: 20,
    },
    article: {
      flex: 1,
      marginBottom: 20,
    },
    scrollContainer: {
      flex: 1,
      backgroundColor: colors.background,
    },
    articleTextContainer: {
      flex: 1,
      marginTop: 10,
      backgroundColor: colors.onSurface,

      marginBottom: 10,
    },
    articleText: {
      color: colors.accent,
      fontSize: 14,
      fontWeight: "700",
      textAlign: "center",
    },
    articleImage: {
      flex: 1,
      aspectRatio: 1,
      width: "60%",
      height: "60%",
      maxWidth: 165,
      maxHeight: 165,
      borderRadius: 10,
      borderColor: colors.borderColor,
      borderWidth: 1,
      alignSelf: "center",
    },
  });
  const goBack = (navigation) => {
    navigation.goBack();
  };
  const headerImage = require("../../../assets/brand/background-search.png");
  const showNotFoundData =
    search &&
    search.length > 0 &&
    dataArticles &&
    Object.values(dataArticles).length <= 0;
  return (
    <View style={styles.articleContainer}>
      <ImageBackground
        blurRadius={5}
        source={headerImage}
        resizeMode="cover"
        style={styles.imageBackgroundContainer}
      >
        <View style={styles.topNavigationContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => goBack(navigation)}
            style={styles.touchableContainer}
          >
            <MaterialCommunityIcons
              style={styles.goBackIcon}
              name="keyboard-backspace"
              size={24}
            />
            <Text style={styles.goBackText}>Ir Atras</Text>
          </TouchableOpacity>
        </View>
        {fontLoaded && (
          <View style={styles.searchTitleContainer}>
            <Text style={styles.searchTitle}>{titlePage}</Text>
          </View>
        )}
      </ImageBackground>
      <View style={styles.scrollContainer}>
        {!category && (
          <Input
            placeholder="Consejos de lactancia."
            leftIcon={<Icon name="search" size={24} color="black" />}
            onChangeText={(value) => setDataSearch(value)}
          />
        )}
        {isLoading ? (
          <ActivityIndicator color={"red"} size={"large"} />
        ) : (
          <>
            {dataArticles && (
              <FlatList
                data={dataArticles}
                style={styles.list}
                contentContainerStyle={styles.listContainer}
                keyExtractor={(e) => e._id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.article}
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate("ArticleStackDetails", item)
                    }
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
            )}
            {showNotFoundData && (
              <View style={(styles.listContainer, { marginBottom: 190 })}>
                <Text style={styles.articleText}>
                  No se encontraron artículos con el contenido buscado!
                </Text>
              </View>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default ArticleSearch;
