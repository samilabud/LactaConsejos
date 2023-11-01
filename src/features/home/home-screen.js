import Header from "../../components/header/header-component";
import ArticlesList from "../article/articles-list";
import { View, StyleSheet, Platform, ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => (
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
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2D9DC",
  },
  articlesContainer: {
    flex: 1,
  },
  postContainer: {
    flex: 1,
  },
});
