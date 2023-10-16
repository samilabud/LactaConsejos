import { View, Image, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import { List } from "react-native-paper";

const profileImage = require("../../../assets/fotos/profile/paola-profile.png");

const openURL = async (url) => {
  // Checking if the link is supported for links with custom URL scheme.
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
    await Linking.openURL(url);
  }
};
  
const AboutMe = () => {
  const { colors } = lightTheme;
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    profileContainer: {
      width: "auto",
      flex: 1,
    },
    profileImageContainer: {
      paddingTop: insets.top,
      flex: 0.4,
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "flex-end",
      width: "auto",
      backgroundColor: colors.primary,
      zIndex: 2,
    },
    profileImage: {
      width: 120,
      height: 120,
      borderRadius: 80,
      marginTop: insets.top,
      borderColor: colors.borderColor,
      borderWidth: 4,
      top: '10%',
      zIndex: 3,
    },
    profileDataContainer: {
      flex: 1,
      backgroundColor: colors.background,
      zIndex: 1,
      paddingTop: 70,
      justifyContent: "space-evenly",
      paddingBottom: 120,
    },
  });
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileImageContainer}>
        <Image style={styles.profileImage} source={profileImage} />
      </View>
      <View style={styles.profileDataContainer}>
        <List.Item
          title="Dra. Paola Guzmán"
          description="Nombre"
          titleStyle={{ color: colors.text }}
          descriptionStyle={{ color: colors.accent }}
          left={(props) => <List.Icon {...props} icon="mother-nurse" />}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=>openURL('mailto:paolavirginiaguzman@gmail.com')}
        >
          <List.Item
          title="paolavirginiaguzman@gmail.com"
          description="Correo Electrónico"
          titleStyle={{ color: colors.text }}
          descriptionStyle={{ color: colors.accent }}
          left={(props) => <List.Icon {...props} icon="email" />}
        />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=>openURL('https://www.instagram.com/lactaconsejosrd/')}
        >
          <List.Item
            title="lactaconsejosrd"
            description="Instagram"
            titleStyle={{ color: colors.text }}
            descriptionStyle={{ color: colors.accent }}
            left={(props) => <List.Icon {...props} icon="instagram" />}
          />
        </TouchableOpacity>
        
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=>openURL('whatsapp://send?text=hello&phone=+18494086156')}
        >
          <List.Item
            title="1-849-408-6156"
            description="Whatsapp"
            titleStyle={{ color: colors.text }}
            descriptionStyle={{ color: colors.accent }}
            left={(props) => <List.Icon {...props} icon="whatsapp" />}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutMe;
