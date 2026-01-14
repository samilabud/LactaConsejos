import * as Font from "expo-font";
import { Image } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import RenderHTML from "react-native-render-html";
import { Share } from "react-native";
import SkeletonIndicator from "../../components/indicators/skeleton-indicator";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { backendBaseURL, frontendRedirectorUrl } from "../../global";
import { useEffect, useState } from "react";

const theLobsterFont = {
  "Lobster-Regular": require("../../../assets/fonts/Lobster-Regular.ttf"),
};

const ArticleDetails = ({ route, navigation }) => {
  const [postData, setPostData] = useState(route.params);
  const { id: urlID } = route.params;
  const { colors } = lightTheme;
  const hasRoutePostData = Object.keys(postData).length > 1;
  //If is loaded from an URL should show the loading indicator
  const [isLoading, setIsLoading] = useState(!hasRoutePostData);

  const loadArticlesById = async (urlID) => {
    try {
      let post = await fetch(`${backendBaseURL}/articles/${urlID}`);
      post = await post.json();
      return post;
    } catch (err) {
      console.error(err, `Could not load post from id ${urlID}`);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      if (!hasRoutePostData) {
        let { title, content, image, _id } = await loadArticlesById(urlID);
        setPostData({ title, content, image, _id });
      }
      setIsLoading(false);
    };
    loadData();
  }, [urlID]);

  const shareLink = async () => {
    try {
      const { title, _id: id } = postData;
      const url = `${frontendRedirectorUrl}/${id}`;
      const message = `Te comparto este artículo: ${title}, por favor revísalo.`;
      Share.share({
        message: `${message} ${url}`,
      });
    } catch (error) {
      console.error("Error sharing link:", error.message);
    }
  };

  const [fontLoaded] = Font.useFonts(theLobsterFont);

  const styles = StyleSheet.create({
    articleContainer: {
      flex: 1,
      backgroundColor: colors.background,
    },
    image: {
      flex: 0.01,
      minHeight: 300,
      justifyContent: "space-between",
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    topNavigationContainer: {
      width: "auto",
      paddingLeft: 16,
      paddingTop: 50,
      paddingRight: 16,
      paddingBottom: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 10,
    },
    touchableContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 20,
      backdropFilter: "blur(10px)",
    },
    topNavigationIcon: {
      color: "#FFFFFF",
    },
    goBackText: {
      marginLeft: 8,
      color: "#FFFFFF",
      fontSize: 15,
      fontWeight: "600",
    },
    articleTitleContainer: {
      paddingHorizontal: 20,
      paddingVertical: 16,
      marginTop: 16,
      marginBottom: 20,
    },
    articleTitle: {
      color: "#FFFFFF",
      fontSize: 28,
      fontFamily: "Lobster-Regular",
      textShadowColor: "rgba(0, 0, 0, 0.3)",
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 4,
      lineHeight: 36,
    },
    scrollContainer: {
      flex: 1,
      backgroundColor: colors.background,
    },
    articleDataContainer: {
      paddingHorizontal: 24,
      paddingVertical: 32,
      maxWidth: 700,
      alignSelf: "center",
      width: "100%",
    },
    articleImage: {
      width: "100%",
      maxWidth: 400,
      height: 300,
      borderRadius: 12,
      borderColor: colors.borderColor,
      borderWidth: 1.5,
      alignSelf: "center",
      marginBottom: 32,
      marginTop: 16,
      backgroundColor: colors.surfaceBackgroundColor,
    },
    indicatorWrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    indicatorText: {
      fontSize: 18,
      marginTop: 12,
      color: colors.text,
    },
  });

  const goBack = (navigation) => {
    if (hasRoutePostData) {
      navigation.navigate("Home"); //If user open the app using a link should go home screen instead of go back
    } else {
      navigation.goBack();
    }
  };
  const headerImage = require("../../../assets/brand/breastfeeding-article-header.jpg");
  const { width } = useWindowDimensions();
  return (
    <View style={styles.articleContainer}>
      {isLoading || !hasRoutePostData ? (
        <SkeletonIndicator
          blocks={1}
          width={280}
          height={280}
          vAlign="center"
          lines={3}
        />
      ) : (
        <>
          <ImageBackground
            blurRadius={8}
            source={headerImage}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.overlay} />
            <View style={styles.topNavigationContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => goBack(navigation)}
                style={styles.touchableContainer}
              >
                <MaterialCommunityIcons
                  style={styles.topNavigationIcon}
                  name="keyboard-backspace"
                  size={22}
                />
                {fontLoaded && <Text style={styles.goBackText}>Ir Atras</Text>}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => shareLink()}
                style={styles.touchableContainer}
              >
                <MaterialCommunityIcons
                  style={styles.topNavigationIcon}
                  name="share-variant"
                  size={22}
                />
                {fontLoaded && <Text style={styles.goBackText}>Compartir</Text>}
              </TouchableOpacity>
            </View>
            <View style={styles.articleTitleContainer}>
              {fontLoaded && (
                <Text style={styles.articleTitle}>{postData.title}</Text>
              )}
            </View>
          </ImageBackground>
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={{ paddingBottom: 60 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.articleDataContainer}>
              {postData.content && (
                <RenderHTML
                  contentWidth={width - 48}
                  source={{ html: postData.content }}
                  baseStyle={{
                    color: colors.text,
                    fontSize: 17,
                    lineHeight: 28,
                    fontFamily: "System",
                  }}
                  tagsStyles={{
                    p: {
                      marginBottom: 20,
                      color: colors.text,
                      fontSize: 17,
                      lineHeight: 28,
                    },
                    h1: {
                      color: colors.text,
                      fontSize: 26,
                      fontWeight: "700",
                      marginBottom: 16,
                      marginTop: 12,
                      lineHeight: 34,
                    },
                    h2: {
                      color: colors.text,
                      fontSize: 22,
                      fontWeight: "700",
                      marginBottom: 14,
                      marginTop: 12,
                      lineHeight: 30,
                    },
                    h3: {
                      color: colors.text,
                      fontSize: 19,
                      fontWeight: "600",
                      marginBottom: 12,
                      marginTop: 10,
                      lineHeight: 26,
                    },
                    strong: {
                      fontWeight: "700",
                      color: colors.text,
                    },
                    ul: {
                      marginBottom: 20,
                      paddingLeft: 24,
                    },
                    ol: {
                      marginBottom: 20,
                      paddingLeft: 24,
                    },
                    li: {
                      marginBottom: 12,
                      color: colors.text,
                      fontSize: 17,
                      lineHeight: 26,
                    },
                  }}
                />
              )}
              {postData.image && (
                <Image
                  source={{ uri: `data:image/png;base64,${postData.image}` }}
                  containerStyle={styles.articleImage}
                  PlaceholderContent={
                    <ActivityIndicator color={colors.accent} size={"large"} />
                  }
                  transition={true}
                  transitionDuration={500}
                  resizeMode="cover"
                />
              )}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default ArticleDetails;
