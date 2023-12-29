import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import RenderHTML from "react-native-render-html";
import { Image } from "@rneui/themed";
import { Share } from "react-native";
import { backendBaseURL, frontendBaseURL } from "../../global";

const theLobsterFont = {
  "Lobster-Regular": require("../../../assets/fonts/Lobster-Regular.ttf"),
};

const ArticleDetails = ({ route, navigation }) => {
  const [postData, setPostData] = useState(route.params);
  const { id: urlID } = route.params;
  const { colors } = lightTheme;
  const hasRoutePostData = Object.keys(postData).length > 1;

  const loadArticlesById = async (urlID) => {
    try {
      let post = await fetch(`${backendBaseURL}/articles/${urlID}`);
      post = await post.json();
      return post;
    } catch (err) {
      console.log(err, `Could not load post from id ${urlID}`);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      if (!hasRoutePostData) {
        let { title, content, image, _id } = await loadArticlesById(urlID);
        setPostData({ title, content, image, _id });
      }
    };
    loadData();
  }, [urlID]);

  const shareLink = async () => {
    try {
      const { title, _id: id } = postData;
      const url = `${frontendBaseURL}/a/${id}`;
      const message = `Te comparto este artículo: ${title}, por favor revísalo:`;
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
    },
    topNavigationContainer: {
      width: "auto",
      paddingLeft: 10,
      paddingTop: 25,
      paddingRight: 10,
      flex: 2,
      justifyContent: "space-between",
      flexDirection: "row",
    },
    touchableContainer: {
      width: "auto",
      flexWrap: "wrap",
      flexDirection: "row",
    },
    topNavigationIcon: {
      color: colors.iconColor,
    },
    goBackText: {
      marginLeft: 10,
      marginTop: 2,
      color: colors.accent,
    },
    articleTitleContainer: {
      backgroundColor: colors.background + "30",
      padding: 10,
      marginBottom: 60,
    },
    articleTitle: {
      color: colors.text,
      fontSize: 32,
      fontFamily: "Lobster-Regular",
    },
    articleDataContainer: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    scrollContainer: {
      padding: 20,
      backgroundColor: colors.background,
      maxHeight: 600,
      flex: 1,
    },
    image: {
      flex: 0.6,
      justifyContent: "center",
      alignContent: "space-between",
      justifyContent: "space-between",
    },
    articleImage: {
      flex: 1,
      aspectRatio: 1,
      width: "60%",
      height: "60%",
      borderRadius: 10,
      borderColor: colors.borderColor,
      borderWidth: 1,
      alignSelf: "center",
      marginBottom: 100,
      marginTop: 20,
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
    hasRoutePostData && (
      <View style={styles.articleContainer}>
        <ImageBackground
          blurRadius={5}
          source={headerImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.topNavigationContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => goBack(navigation)}
              style={styles.touchableContainer}
            >
              <MaterialCommunityIcons
                style={styles.topNavigationIcon}
                name="keyboard-backspace"
                size={24}
              />
              {fontLoaded && <Text style={styles.goBackText}>Ir Atras</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => shareLink()}
              style={styles.touchableContainer}
            >
              <MaterialCommunityIcons
                style={styles.topNavigationIcon}
                name="share-variant"
                size={24}
              />
              {fontLoaded && <Text style={styles.goBackText}>Compartir</Text>}
            </TouchableOpacity>
          </View>
          <View style={styles.articleTitleContainer}>
            <Text style={styles.articleTitle}>{postData.title}</Text>
          </View>
        </ImageBackground>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.articleDataContainer}>
            {postData.content && (
              <RenderHTML
                contentWidth={width}
                source={{ html: postData.content }}
              />
            )}
            <Image
              source={{ uri: `data:image/png;base64,${postData.image}` }}
              containerStyle={styles.articleImage}
              PlaceholderContent={
                <ActivityIndicator color={"red"} size={"large"} />
              }
              transition={true}
              transitionDuration={500}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </View>
    )
  );
};

export default ArticleDetails;
