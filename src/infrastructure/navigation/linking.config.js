import { frontendBaseURL } from "../../global";
import * as Linking from "expo-linking";

//https://reactnavigation.org/docs/deep-linking
//https://reactnavigation.org/docs/navigation-container/#linkingconfig

export const linkingConfig = {
  prefixes: [
    Linking.createURL("/"),
    // frontendBaseURL,
    // Linking.createURL("exp://10.0.0.15:8081/--/"),
  ],
  config: {
    screens: {
      Incio: "Inicio",
      "Sobre mi": "Sobre mi",
      Home: "Home",
      ArticleStackDetails: "ArticleStackDetails",
      ArticleStackSearch: "ArticleStackSearch",
      NotFound: "*",
      // Home: {
      //   path: "/",
      // },
      // ArticleStackDetails: {
      //   path: "a/:id",
      //   // parse: {
      //   //   id: Number,
      //   // },
      // },
    },
  },
  getStateFromPath(path, config) {
    console.log({ path, config });
    // Return a state object here
    // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`
  },
};
// console.log(linkingConfig);
