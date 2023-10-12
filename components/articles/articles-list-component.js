import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { Image } from '@rneui/themed';


const BASE_URI = 'https://source.unsplash.com/random?sig=';

const ArticlesList = () => {
    const dataArticles  = [
        {
        id: 1,
        title: "Los Beneficios Inigualables de la Lactancia Materna",
        image: "2023-10-11"
      },
      {
        id: 2,
        title: "Consejos para una Lactancia Materna Exitosa",
        image: "2023-10-10"
      },
      {
        id: 3,
        title: "Lactancia Materna vs. Lactancia Artificial: Pros y Contras",
        image: "2023-10-09"
      },
      {
        id: 4,
        title: "Cómo Prepararte para la Lactancia Materna Durante el Embarazo",
        image: "2023-10-08"
      },
      {
        id: 5,
        title: "Superando los Desafíos Comunes de la Lactancia Materna",
        image: "2023-10-07"
      },
      {
        id: 6,
        title: "Los Beneficios Inigualables de la Lactancia Materna",
        image: "2023-10-11"
      },
      {
        id: 7,
        title: "Consejos para una Lactancia Materna Exitosa",
        image: "2023-10-10"
      },
      {
        id: 8,
        title: "Lactancia Materna vs. Lactancia Artificial: Pros y Contras",
        image: "2023-10-09"
      },
      {
        id: 9,
        title: "Cómo Prepararte para la Lactancia Materna Durante el Embarazo",
        image: "2023-10-08"
      },
    
    ];
      

    return (
        <View style={styles.articlesContainer}>
            <FlatList 
                data={dataArticles}
                style={styles.list}
                contentContainerStyle={styles.listContainer}
                numColumns={2}
                centerContent={true}
                keyExtractor={(e) => e.id}
                renderItem={( {item} ) => (
                    <TouchableOpacity style={styles.article} activeOpacity={0.8}>
                        <Image
                            source={require('../../assets/fotos/articulos/articulo1.png')}
                            containerStyle={styles.articleImage}
                            PlaceholderContent={<ActivityIndicator />}
                            transition={true}
                            resizeMode="contain"
                        />
                        <Text numberOfLines={2} style={styles.articleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    articlesContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-around',
        alignContent: 'space-between',
    },
    listContainer: {
    },
    list: {
    },
    article: {
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '3%',
        marginTop: '6%',
        width: '40%',
        textAlign: 'justify',
        height: 170,
    },
    articleImage: {
        aspectRatio: 1,
        width: '95%',
        height: '90%',
        borderRadius: 10,
        marginTop: 5,
        borderColor: '#5e548e',
        borderWidth: 1,
    },
    articleText: {
        display: 'flex',
        fontVariant: 'small-caps',
        color: '#BE546C',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    }
});

export default ArticlesList;