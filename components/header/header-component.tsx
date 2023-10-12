import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, View, Text, Image } from "react-native";
import { Header as HeaderRNE } from "@rneui/themed";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSpring, animated } from "@react-spring/web";
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from "expo-font";

type HeaderComponentProps = {
  title: string;
  view?: string;
};

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
  // const [fontLoaded, setFontLoaded] = useState(false);
  const insets = useSafeAreaInsets();
  const theFont = {
    "Lobster-Regular": require("../../assets/fonts/Lobster-Regular.ttf"),
  };

  const [fontLoaded] = Font.useFonts(theFont)
  useEffect(() => {
    async function loadFonts() {
      
      // await Font.loadAsync(theFont);
      // setFontLoaded(true);
    }

    // loadFonts();
  }, []);
  const AnimatedView = animated(View);
  const { x } = useSpring({
    from: { x: 0 },
    x: 1,
    config: { duration: 1000 },
  });

  return (
      <HeaderRNE
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['#D897A5', '#E2BAC3'],
          start: { x: 0, y: 0.5 },
          end: { x: 0, y: 1 },
        }}
        statusBarProps={{hidden:true}}
        elevated={true}
        leftComponent={
          <Image
            source={require("./breastfeeding-mother.png")}
            style={styles.logo}
          />
        }
        centerComponent={
          fontLoaded && (
          <AnimatedView
            style={{
              opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
              scale: x.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              }),
            }}
          >
            <Text style={styles.heading}>Lacta Consejos</Text>
          </AnimatedView>)
        }
        rightComponent={
          <MaterialCommunityIcons style={styles.contactIcon} name="mother-nurse" size={24} color="white" />
        }
        containerStyle={styles.headerContainer}
      />
  );
};


const styles = StyleSheet.create({
  contactIcon: {
    marginTop: 8,
  },
  headerContainer: {
    paddingVertical: 15,
    width: "100%",
    marginBottom: -2,
  },
  heading: {
    color: "#C10949",
    fontSize: 32,
    // fontWeight: "bold",
    fontFamily: "Lobster-Regular",
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default Header;
