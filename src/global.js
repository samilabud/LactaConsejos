import Constants from "expo-constants";
import { Platform } from "react-native";

// Environment detection
// eslint-disable-next-line no-undef
const isDevelopment =
  (typeof __DEV__ !== "undefined" ? __DEV__ : false) ||
  Constants.expoConfig?.extra?.environment === "development";
const isProduction = !isDevelopment;

// Frontend URLs (same for both environments)
export const frontendHost = "lactaconsejos.netlify.app";
export const frontendBaseURL = "https://lactaconsejos.netlify.app";
export const frontendRedirectorUrl = "https://lactaconsejosrtn.netlify.app";

// Backend URLs based on environment
const getBackendURL = () => {
  if (isDevelopment) {
    // Development URLs
    if (Platform.OS === "android") {
      return "http://10.0.2.2:3080"; // Android emulator localhost
    } else if (Platform.OS === "ios") {
      return "http://localhost:3080"; // iOS simulator localhost
    } else {
      return "http://localhost:3080"; // Web/other platforms
    }
  } else {
    // Production URL
    return "https://lactaconsejosws.onrender.com";
  }
};

export const backendBaseURL = getBackendURL();

// Environment info for debugging
export const environmentInfo = {
  isDevelopment,
  isProduction,
  platform: Platform.OS,
  backendURL: backendBaseURL,
  environment: isDevelopment ? "development" : "production",
};

//Test for links:
//  npx uri-scheme open lactaconsejos:// --android
//  npx uri-scheme open exp://10.0.0.15:8081/--/ --android
//  npx uri-scheme open exp://10.0.0.15:8081/--/ArticleStackDetails
