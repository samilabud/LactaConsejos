import { DefaultTheme } from "react-native-paper";

export const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#EED1CA", //first color of gradient in header
    secondary: "#F3D1D4", //second color of gradient in header
    accent: "#ee5f9b", //heading text (logo and article's titles)
    anchorText: "#a81d4d", //anchor-links color (see all)
    onSurface: "#FFFFFF", //background for tile text in article list
    background: "#FFFFFF", //background for details, below of headers,
    borderColor: "#a81d4d", //border color for articles
    activeTabTint: "#a81d4d",
    inactiveTabTint: "#ee5f9b",
    inactiveTabBackground: "#EED1CA", //primary
    surfaceBackgroundColor: "#F3D1D4", //secondary
    iconColor: "#ee5f9b",
    inactiveIconColor: "f18db5",
    iconBackground: "#FFFFFF",
    text: "#ee5f9b", //section Title Color
  },
};
