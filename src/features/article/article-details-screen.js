import { View, Text, Button } from "react-native";
const ArticleDetails = ({ route, navigation }) => {
  const { id, title } = route.params;
  return (
    <View style={{ marginTop: 39, backgroundColor: "blue" }}>
      <Text>{title}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ArticleDetails;
