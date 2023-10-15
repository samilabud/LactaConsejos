import { View, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";


const profileImage = require('../../../assets/fotos/profile/paola-profile.png')

const AboutMe = () => {
    const insets = useSafeAreaInsets();
    const styles = StyleSheet.create({
        profileContainer: {
            width: 'auto',
            flex:1,
            marginTop: insets.top,
        },
        profileImageContainer: {
            flex:1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'flex-end',
            width: 'auto'
        },
        profileImage: {
            width: 120,
            height: 120,
            borderRadius: 80,
            borderColor: "#FFF",
            borderWidth: 3,
        }
    });
    return(
        <View style={styles.profileContainer}>
            <View style={styles.profileImageContainer}>
                <Image style={styles.profileImage} source={profileImage} />
            </View>
        </View>
    )
};


export default AboutMe;