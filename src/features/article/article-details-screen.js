import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import RenderHTML from "react-native-render-html";

const ArticleDetails = ({ route, navigation }) => {
  const { title, content: html } = route.params;
  const { colors } = lightTheme;

  const theLobsterFont = {
    "Lobster-Regular": require("../../../assets/fonts/Lobster-Regular.ttf"),
  };
  const [fontLoaded] = Font.useFonts(theLobsterFont);

  const styles = StyleSheet.create({
    articleContainer: {
      flex: 1,
    },
    topNavigationContainer: {
      width: "auto",
      paddingLeft: 10,
      paddingTop: 10,
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
      flex: 1,
      padding: 20,
      backgroundColor: colors.background,
    },
    image: {
      flex: 0.6,
      justifyContent: "center",
      alignContent: "space-between",
      justifyContent: "space-between",
    },
  });
  const goBack = (navigation) => {
    navigation.goBack();
  };
  const image = require("../../../assets/brand/breastfeeding-article-header.jpg");
  const { width } = useWindowDimensions();
  return (
    <View style={styles.articleContainer}>
      <ImageBackground
        blurRadius={5}
        source={image}
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
              style={styles.goBackIcon}
              name="keyboard-backspace"
              size={24}
            />
            {fontLoaded && <Text style={styles.goBackText}>Ir Atras</Text>}
          </TouchableOpacity>
        </View>
        <View style={styles.articleTitleContainer}>
          <Text style={styles.articleTitle}>{title}</Text>
        </View>
      </ImageBackground>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.articleDataContainer}>
          {html && <RenderHTML contentWidth={width} source={{ html }} />}
        </View>
      </ScrollView>
    </View>
  );
};

export default ArticleDetails;
