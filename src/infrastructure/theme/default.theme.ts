import { DefaultTheme } from 'react-native-paper';

export const lightTheme = {
    ...DefaultTheme,
    roundness: 2,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: '#EED1CA', //first color of gradient in header
      secondary: '#F3D1D4',  //second color of gradient in header
      accent: '#BE546C', //heading text (logo and article's titles)
      anchorText: '#176875', //anchor-links color (see all)
      onSurface: '#FFFFFF', //background for tile text in article list
      background: '#F2D9DC', //background for details, below of headers,
      borderColor: '#BE546C', //border color for articles
      activeTabTint: "#000000",
      inactiveTabTint:  "#445F5F",
      inactiveTabBackground: "#EED1CA", //primary
      surfaceBackgroundColor: "#F3D1D4", //secondary
      iconColor: '#C10949',
      iconBackground: '#E6E3E2',
      text: '#C10949', //section Title Color
    }
  };
