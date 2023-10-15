import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Image } from "@rneui/themed";
import { lightTheme } from "../../infrastructure/theme/default.theme";


const BASE_URI = "https://source.unsplash.com/random?sig=";

const ArticlesList = ({ category }) => {
  const { colors } = lightTheme;

  const dataArticles = [
    {
      id: 1,
      title: "Los Beneficios Inigualables de la Lactancia Materna",
      image: require("../../../assets/fotos/articulos/Articulo1.png"),
    },
    {
      id: 2,
      title: "Consejos para una Lactancia Materna Exitosa",
      image: require("../../../assets/fotos/articulos/Articulo2.png"),
    },
    {
      id: 3,
      title: "Lactancia Materna vs. Lactancia Artificial: Pros y Contras",
      image: require("../../../assets/fotos/articulos/Articulo3.png"),
    },
    {
      id: 4,
      title: "Cómo Prepararte para la Lactancia Materna Durante el Embarazo",
      image: require("../../../assets/fotos/articulos/Articulo4.png"),
    },
    {
      id: 5,
      title: "Superando los Desafíos Comunes de la Lactancia Materna",
      image: require("../../../assets/fotos/articulos/Articulo5.png"),
    },
    {
      id: 6,
      title: "Los Beneficios Inigualables de la Lactancia Materna",
      image: require("../../../assets/fotos/articulos/Articulo6.png"),
    },
    {
      id: 7,
      title: "Consejos para una Lactancia Materna Exitosa",
      image: require("../../../assets/fotos/articulos/Articulo7.png"),
    },
    {
      id: 8,
      title: "Lactancia Materna vs. Lactancia Artificial: Pros y Contras",
      image: require("../../../assets/fotos/articulos/Articulo8.png"),
    },
    {
      id: 9,
      title: "Cómo Prepararte para la Lactancia Materna Durante el Embarazo",
      image: require("../../../assets/fotos/articulos/Articulo9.png"),
    },
  ];
  const dataCategories = {
    1: "Aprendiendo a Lactar",
    2: "Madres lactantes",
    3: "Información para padres",
    4: "Acerca del bebe",
  };

  const styles = StyleSheet.create({
    articlesListContainer: {
      flex: 1,
      marginTop: 20,
      width: "auto",
    },
    titleContainer: {
      flex: 1,
      width: "auto",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingHorizontal: 12,
      flexWrap: "nowrap",
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
      color: colors.text,
      textShadowColor: "#eac4d5",
      textShadowRadius: 3,
      textShadowOffset: { width: 1, height: 3 },
    },
    seeAll: {
      color: colors.anchorText,
      fontVariant: "small-caps",
    },

    articlesContainer: {
      width: "auto",
      height: 170,
      marginTop: 10,
    },
    listContainer: {
      width: "auto",
      height: "auto",
    },
    list: {
      width: "auto",
      height: "auto",
    },
    article: {
      flex: 1,
      marginLeft: 10,
      height: 140,
      width: 140,
    },
    articleImage: {
      flex: 1,
      aspectRatio: 1,
      width: "100%",
      height: "100%",
      borderRadius: 10,
      borderColor: colors.borderColor,
      borderWidth: 2,
      alignSelf: "center",
    },
    articleTextContainer: {
      flex: 1,
      position: "absolute",
      width: "96%",
      marginTop: "76.5%",
      marginStart: 3,
      shadowOpacity: 0.8,
      shadowOffset: { width: 1, height: 5 },
      backgroundColor: colors.onSurface,
      opacity: 0.8,
      borderRadius: 7,
    },
    articleText: {
      color: colors.accent,
      fontSize: 12,
      fontWeight: "700",
      textAlign: "center",
    },
  });

  return (
    <View style={styles.articlesListContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{dataCategories[category]}</Text>
        <Text style={styles.seeAll}>Ver todo</Text>
      </View>
      <View style={styles.articlesContainer}>
        <FlatList
          horizontal={true}
          data={dataArticles}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(e) => e.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.article} activeOpacity={0.8}>
              <Image
                source={item.image}
                containerStyle={styles.articleImage}
                PlaceholderContent={
                  <ActivityIndicator color={"red"} size={"large"} />
                }
                transition={true}
                transitionDuration={500}
                resizeMode="contain"
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
  );
};

export default ArticlesList;
