//@ts-ignore
import React, { FunctionComponent, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Header as HeaderRNE } from "@rneui/themed";
import { useSpring, animated } from "@react-spring/web";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { lightTheme } from "../../infrastructure/theme/default.theme";
import * as Font from "expo-font";

const Header = (props) => {
  const { colors } = lightTheme;
  const [countPressed, setCountPressed] = useState(0);
  const [activateHiddenEffect, setActivateHiddenEffect] = useState(false);
  const [imagePressed, setImagePressed] = useState(false);
  const theLobsterFont = {
    "Lobster-Regular": require("../../../assets/fonts/Lobster-Regular.ttf"),
  };
  const [fontLoaded] = Font.useFonts(theLobsterFont);
  const AnimatedView = animated(View);
  const { x } = useSpring({
    from: { x: 0 },
    x: activateHiddenEffect ? 0 : 1,
    config: { duration: 1000 },
  });
  const { y } = useSpring({
    from: { y: 0 },
    y: imagePressed ? 0 : 1,
    config: { duration: 1000 },
  });

  const styles = StyleSheet.create({
    searchButtonContainer: {
      flexDirection: "row",
      backgroundColor: colors.iconBackground,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: 30,
      justifyContent: "flex-start",
      alignItems: "center",
      width: 120,
      height: 40,
      marginTop: 10,
      paddingRight: 15,
      marginRight: -15,
    },
    searchButtonText: {
      paddingStart: 10,
      color: colors.iconColor,
    },
    contactIcon: {
      color: colors.iconColor,
      paddingStart: 10,
    },
    headerContainer: {
      paddingVertical: 15,
      width: "100%",
      paddingTop: StatusBar.currentHeight,
    },
    heading: {
      color: colors.text,
      fontSize: 32,
      fontFamily: "Lobster-Regular",
      marginLeft: -15,
    },
    logo: {
      width: 50,
      height: 50,
    },
  });

  return (
    <HeaderRNE
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: [colors.primary, colors.secondary],
        start: { x: 0.1, y: 0.1 },
        end: { x: 0.2, y: 1 },
      }}
      // statusBarProps={{hidden:true}}
      elevated={true}
      leftComponent={
        <Pressable
          onPressOut={() => {
            setImagePressed(false);
            if (activateHiddenEffect && countPressed >= 4) {
              setActivateHiddenEffect(false);
              setCountPressed(0);
            }
          }}
          onPressIn={() => {
            setImagePressed(true);
            setCountPressed((countPressed) => countPressed + 1);
            if (countPressed >= 2) {
              setActivateHiddenEffect(true);
            }
          }}
        >
          <AnimatedView
            style={{
              opacity: y.to({ range: [0, 1], output: [0.3, 1] }),
              scale: y.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              }),
            }}
          >
            <Image
              source={require("./breastfeeding-mother.png")}
              style={styles.logo}
            />
          </AnimatedView>
        </Pressable>
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
              alignSelf: "flex-start",
              paddingTop: 10,
            }}
          >
            <Text style={styles.heading}>Lacta Consejos</Text>
          </AnimatedView>
        )
      }
      rightComponent={
        <TouchableOpacity
          style={styles.searchButtonContainer}
          activeOpacity={0.6}
          onPress={() => props.navigation.navigate("ArticleStackSearch")}
        >
          <MaterialCommunityIcons
            style={styles.contactIcon}
            name="magnify"
            size={24}
          />
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
      }
      containerStyle={styles.headerContainer}
    />
  );
};

export default Header;
