import { frontendBaseURL } from "../../global";
import * as Linking from "expo-linking";

//https://reactnavigation.org/docs/deep-linking
//https://reactnavigation.org/docs/navigation-container/#linkingconfig

const scheme = Linking.createURL("/");
const prefix = `${scheme}lactaconsejos://`;

export const linkingConfig = {
  prefixes: [prefix, scheme, frontendBaseURL],
  config: {
    screens: {
      Home: {
        screens: {
          Inicio: "home",
          "Sobre mi": "aboutme",
        },
      },
      ArticleStackSearch: "search",
      ArticleStackDetails: "details",
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
};
