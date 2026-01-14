import { DefaultTheme } from "react-native-paper";

export const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    // Main brand pinks (from logo / website)
    primary: "#F8C8D8", // light pink - header gradient start / surfaces
    secondary: "#FDE3EC", // very light pink - header gradient end / backgrounds

    // Typography / accents
    accent: "#EC5E98", // strong pink accent - buttons, highlights
    anchorText: "#EC5E98", // links (e.g. "Leer más")
    text: "#5E3C3C", // main text - warm brown like site headings

    // Backgrounds & surfaces
    background: "#FFF9FB", // app background
    surfaceBackgroundColor: "#FFFFFF", // cards / tiles
    onSurface: "#FFFFFF", // text background in elevated cards

    // Borders & tabs
    borderColor: "#F3B2C9",
    activeTabTint: "#EC5E98",
    inactiveTabTint: "#B28A8A",
    inactiveTabBackground: "#FDE3EC",

    // Icons
    iconColor: "#EC5E98",
    inactiveIconColor: "#D9A7C4",
    iconBackground: "#FFFFFF",
  },
};
