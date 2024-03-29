import * as Linking from "expo-linking";
import { frontendBaseURL, frontendHost } from "../../global";

//https://reactnavigation.org/docs/deep-linking
//https://reactnavigation.org/docs/navigation-container/#linkingconfig

const prefix = Linking.createURL("/");
const appName = "lactaconsejos";
const urlScheme = "https";

export const linkingConfig = {
  prefixes: [prefix, frontendBaseURL, frontendHost, appName, urlScheme],
  config: {
    screens: {
      Home: {
        screens: {
          Inicio: "home",
          "Sobre mi": "aboutme",
        },
      },
      ArticleStackSearch: "search",
      ArticleStackDetails: {
        path: "/a/:id",
      },
      NotFound: "*",
    },
  },
};

//To test linking we should run:
// 1. npm start
// 2. open Android (a option)
// 3. execute npx uri-scheme open exp://10.0.0.15:8081/--/aboutme --android

//eg: npx uri-scheme open exp://10.0.0.15:8081/--/a/654668eace3f103a641c6174 --android
