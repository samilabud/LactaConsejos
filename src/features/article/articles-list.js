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

const ArticlesList = ({ category, navigation }) => {
  const { colors } = lightTheme;

  const contentIpsum = `
<p><b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Phasellus ligula ipsum, placerat nec tempor non, mattis vel nibh. Suspendisse in dignissim arcu. In molestie lectus eget quam dignissim ultricies. Vestibulum condimentum sed nulla sit amet tempor. Praesent convallis sed nulla sed sollicitudin. Cras rutrum, erat vel convallis volutpat, mi diam lacinia dui, at tristique arcu ex in ex. Ut tempus ac augue ut lobortis. Proin tellus ex, commodo eu accumsan nec, sagittis eget magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec tincidunt nisi. Praesent vehicula lobortis ornare. Nam a convallis mi. Aliquam malesuada sollicitudin risus, non dapibus neque maximus sit amet. Etiam a bibendum magna, at blandit est. Vestibulum sed turpis non velit tristique sagittis quis et mauris. Cras faucibus magna a ligula lobortis, ac ultricies neque suscipit.</p>

<p>Etiam efficitur suscipit ex vitae vulputate. Nulla consectetur, arcu eget tempus venenatis, tortor tellus sollicitudin turpis, eu tempus ante felis maximus risus. Vestibulum ut libero quis felis euismod vehicula sit amet in purus. Nulla ac ligula id elit gravida rutrum. Sed sed vulputate nisi, euismod gravida mi. Quisque fermentum ultrices pretium. Etiam at purus in nulla mattis sodales ut sed lorem.</p>

<p>Quisque eget feugiat turpis, quis pharetra augue. Nam ut libero elementum, vehicula leo vel, pellentesque turpis. Nullam id odio vel dolor accumsan imperdiet. Sed convallis sapien vitae fringilla laoreet. Aenean at lacinia dui. Mauris at nisl lacinia, volutpat ex in, luctus quam. Nullam iaculis mi metus, eget vulputate velit volutpat eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam quis pellentesque lacus. Maecenas vitae enim ut ligula lobortis tincidunt at at nibh. Sed consequat, purus sit amet malesuada malesuada, purus mauris pellentesque velit, quis iaculis erat risus euismod neque.</p>

<p>Nulla ut egestas purus, eu mattis turpis. Nunc mollis, nibh lacinia rutrum semper, orci nunc interdum lorem, in mollis augue nisl et neque. Vestibulum auctor orci ut egestas congue. Vivamus at magna pharetra, congue mi ut, rutrum arcu. In ac orci eu nunc dictum varius. Duis mollis nunc et lobortis fermentum. Praesent molestie nisi sit amet posuere elementum. Suspendisse potenti. Donec non mauris leo. Vestibulum eu diam eros. In dictum justo non risus aliquam, in vulputate neque bibendum. Cras urna ipsum, egestas at vehicula et, tristique eget neque.</p>

<p>Nullam id leo ex. Cras finibus eget nisi at consectetur. Sed consectetur, mauris sit amet imperdiet congue, magna risus imperdiet purus, dignissim consectetur orci dolor sit amet sem. Donec imperdiet elit sed dolor luctus maximus. Mauris in ipsum eu orci maximus blandit. Mauris sem sapien, porta a dolor et, vehicula lacinia ligula. Mauris nec suscipit massa. Etiam massa odio, aliquet eu egestas eu, ultricies a leo. Aliquam a nisi massa. Cras leo nulla, vulputate sit amet laoreet sit amet, mollis sit amet dui.</p>
  `;

  const dataArticles = [
    {
      id: 1,
      title: "Los Beneficios Inigualables de la Lactancia Materna",
      image: require("../../../assets/fotos/articulos/Articulo1.png"),
      content: contentIpsum,
    },
    {
      id: 2,
      title: "Consejos para una Lactancia Materna Exitosa",
      image: require("../../../assets/fotos/articulos/Articulo2.png"),
      content: contentIpsum,
    },
    {
      id: 3,
      title: "Lactancia Materna vs. Lactancia Artificial: Pros y Contras",
      image: require("../../../assets/fotos/articulos/Articulo3.png"),
      content: contentIpsum,
    },
    {
      id: 4,
      title: "Cómo Prepararte para la Lactancia Materna Durante el Embarazo",
      image: require("../../../assets/fotos/articulos/Articulo4.png"),
      content: contentIpsum,
    },
    {
      id: 5,
      title: "Superando los Desafíos Comunes de la Lactancia Materna",
      image: require("../../../assets/fotos/articulos/Articulo5.png"),
      content: contentIpsum,
    },
    {
      id: 6,
      title: "Los Beneficios Inigualables de la Lactancia Materna",
      image: require("../../../assets/fotos/articulos/Articulo6.png"),
      content: contentIpsum,
    },
    {
      id: 7,
      title: "Consejos para una Lactancia Materna Exitosa",
      image: require("../../../assets/fotos/articulos/Articulo7.png"),
      content: contentIpsum,
    },
    {
      id: 8,
      title: "Lactancia Materna vs. Lactancia Artificial: Pros y Contras",
      image: require("../../../assets/fotos/articulos/Articulo8.png"),
      content: contentIpsum,
    },
    {
      id: 9,
      title: "Cómo Prepararte para la Lactancia Materna Durante el Embarazo",
      image: require("../../../assets/fotos/articulos/Articulo9.png"),
      content: contentIpsum,
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
      width: "auto",
    },
    titleContainer: {
      flex: 1,
      width: "auto",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingHorizontal: 12,
      paddingBottom: 4,
      flexWrap: "nowrap",
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
      color: colors.text,
    },
    seeAll: {
      color: colors.anchorText,
      fontVariant: "small-caps",
    },
    articlesContainer: {
      width: "auto",
      height: 180,
      marginTop: 10,
    },
    listContainer: {
      width: "auto",
      height: "auto",
      marginLeft: 10,
    },
    list: {
      width: "auto",
      height: "auto",
    },
    article: {
      flex: 1,
      marginLeft: 10,
      height: 165,
      width: 165,
    },
    articleImage: {
      flex: 1,
      aspectRatio: 1,
      width: "100%",
      height: "100%",
      borderRadius: 10,
      borderColor: colors.borderColor,
      borderWidth: 1,
      alignSelf: "center",
    },
    articleTextContainer: {
      flex: 1,
      position: "absolute",
      width: "97.8%",
      marginTop: 145,
      marginStart: 2,
      shadowOpacity: 0.8,
      shadowOffset: { width: 1, height: 5 },
      backgroundColor: colors.onSurface,
      opacity: 0.8,
      borderRadius: 7,
    },
    articleText: {
      color: colors.accent,
      fontSize: 14,
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
            <TouchableOpacity
              style={styles.article}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("ArticleStackDetails", item)}
            >
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
                <Text style={styles.articleText} numberOfLines={1}>
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
