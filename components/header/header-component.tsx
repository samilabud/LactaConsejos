import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, View, Text, Image } from "react-native";
import { Header as HeaderRNE } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSpring, animated } from "@react-spring/web";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from "expo-font";

type HeaderComponentProps = {
  title: string;
  view?: string;
};

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "lobster-two-regular": require("../../assets/fonts/LobsterTwo-Regular.ttf"),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);
  const AnimatedView = animated(View);
  const { x } = useSpring({
    from: { x: 0 },
    x: 1,
    config: { duration: 1000 },
  });

  return (
    <SafeAreaProvider>
      <HeaderRNE
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
        // rightComponent={
        //   <MaterialCommunityIcons name="mother-nurse" size={24} color="white" />
        // }
        containerStyle={styles.headerContainer}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "lightblue",
    padding: 20,
    borderRadius: 10,
  },
  headerContainer: {
    backgroundColor: "#397af8",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 20,
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "lobster-two-regular",
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default Header;
