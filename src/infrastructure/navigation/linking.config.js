import { frontendBaseURL } from "../../global";

//https://reactnavigation.org/docs/navigation-container/#linkingconfig
export const linkingConfig = {
  prefixes: ["lactaconsejos://", frontendBaseURL],
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
