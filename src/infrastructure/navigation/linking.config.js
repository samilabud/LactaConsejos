import { frontendBaseURL } from "../../global";
import * as Linking from "expo-linking";

//https://reactnavigation.org/docs/deep-linking
//https://reactnavigation.org/docs/navigation-container/#linkingconfig

export const linkingConfig = {
  prefixes: ["lactaconsejos://", frontendBaseURL, Linking.createURL("/")],
  config: {
    screens: {
      Home: {
        screens: {
          ArticleStackDetails: {
            path: "a/:id",
            // parse: {
            //   id: Number,
            // },
          },
        },
      },
    },
  },
  getStateFromPath(path, config) {
    console.log({ path, config });
    // Return a state object here
    // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`
  },
};
