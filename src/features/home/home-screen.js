import Header from "../../components/header/header-component";
import ArticlesList from "../../components/posts/articles-list-component";
import ConferencesList from "../../components/posts/conference-list-component";
import { View, StyleSheet, Platform, ScrollView } from "react-native";

const HomeScreen = ()=> (
        <View style={styles.container}>
          <Header />
          <ScrollView style={styles.articlesContainer}>
            <View style={styles.postContainer}>
              <ArticlesList category={1} />
            </View>
            <View style={styles.postContainer}>
              <ConferencesList />
            </View>
            <View style={styles.postContainer}>
              <ArticlesList category={2} />
            </View>
            <View style={styles.postContainer}>
              <ArticlesList category={3} />
            </View>
            <View style={styles.postContainer}>
              <ArticlesList category={4} />
            </View>
          </ScrollView>
        </View>
);
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2D9DC',
    },
    articlesContainer: {
      flex: 1,
    },
    postContainer: {
      flex: 1,
    }
  });
  