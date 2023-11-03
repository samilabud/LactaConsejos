import Header from "../../components/header/header-component";
import ArticlesList from "../article/articles-list";
import { View, StyleSheet, ScrollView } from "react-native";
import { lightTheme } from "../../infrastructure/theme/default.theme";

const HomeScreen = ({ navigation }) => {
  const { colors } = lightTheme;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    articlesContainer: {
      flex: 1,
      marginTop: 10,
    },
    postContainer: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.articlesContainer}>
        <View style={styles.postContainer}>
          <ArticlesList category={1} navigation={navigation} />
        </View>
        <View style={styles.postContainer}>
          <ArticlesList category={2} navigation={navigation} />
        </View>
        <View style={styles.postContainer}>
          <ArticlesList category={3} navigation={navigation} />
        </View>
        <View style={styles.postContainer}>
          <ArticlesList category={4} navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
