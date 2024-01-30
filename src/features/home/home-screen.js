import { useState, useEffect } from "react";
import Header from "../../components/header/header-component";
import ArticlesList from "../article/articles-list";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import { backendBaseURL } from "../../global";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const HomeScreen = ({ navigation }) => {
  const [dataCategories, setDataCategories] = useState(false);
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
    indicatorWrapper: {
      margin: 10,
      flex: 1,
      alignItems: "start",
      justifyContent: "space-between",
      alignContent: "space-around",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    indicatorText: {
      fontSize: 18,
      marginTop: 12,
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
    // loadCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const skeletonBlocks = Array.from({ length: 6 }, (v, i) => i + 1);
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
        <View style={styles.indicatorWrapper}>
          {skeletonBlocks.map((val) => (
            <SkeletonPlaceholder borderRadius={4} key={val}>
              <SkeletonPlaceholder.Item
                flexDirection="column"
                alignItems="center"
              >
                <SkeletonPlaceholder.Item
                  width={180}
                  height={180}
                  borderRadius={10}
                />
                <SkeletonPlaceholder.Item>
                  <SkeletonPlaceholder.Item
                    width={180}
                    height={10}
                    marginTop={6}
                  />
                  <SkeletonPlaceholder.Item
                    marginTop={6}
                    width={140}
                    height={10}
                  />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
          ))}
        </View>
      )}
    </View>
  );
};
export default HomeScreen;
