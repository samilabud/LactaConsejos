# Environment Configuration Setup

This project now supports automatic environment-based URL configuration for development and production environments.

## How It Works

The system automatically detects the environment and uses the appropriate backend URLs:

### Development Environment
- **Android Emulator**: `http://10.0.2.2:3080`
- **iOS Simulator**: `http://localhost:3080`
- **Web/Other**: `http://localhost:3080`

### Production Environment
- **All Platforms**: `https://lactaconsejosws.onrender.com`

## Environment Detection

The system uses two methods to detect the environment:

1. **`__DEV__` variable**: Automatically set by React Native/Expo in development mode
2. **App configuration**: Set in `app.json` or `app.dev.json` under `extra.environment`

## Usage

### Running in Development Mode

```bash
# Start development server
npm run start:dev

# Run on Android (development)
npm run android:dev

# Run on iOS (development)
npm run ios:dev

# Run on Web (development)
npm run web:dev
```

### Running in Production Mode

```bash
# Start production server
npm start

# Run on Android (production)
npm run android

# Run on iOS (production)
npm run ios

# Run on Web (production)
npm run web
```

## Configuration Files

### `src/global.js`
Contains the main environment configuration logic:
- Automatically detects environment
- Sets appropriate backend URLs based on platform
- Exports `backendBaseURL` and `environmentInfo` for use throughout the app

### `app.json`
Production configuration with `"environment": "production"`

### `app.dev.json`
Development configuration with `"environment": "development"`

## Available Exports

From `src/global.js`:

```javascript
import { 
  backendBaseURL, 
  frontendBaseURL, 
  frontendHost, 
  frontendRedirectorUrl,
  environmentInfo 
} from './global.js';

// backendBaseURL - Automatically set based on environment
// frontendBaseURL - Always "https://lactaconsejos.netlify.app"
// frontendHost - Always "lactaconsejos.netlify.app"
// frontendRedirectorUrl - Always "https://lactaconsejosrtn.netlify.app"
// environmentInfo - Object with environment details for debugging
```

## Environment Info Object

The `environmentInfo` object contains:
```javascript
{
  isDevelopment: boolean,
  isProduction: boolean,
  platform: 'android' | 'ios' | 'web',
  backendURL: string,
  environment: 'development' | 'production'
}
```

## Debugging

To see which environment and URLs are being used, you can log the `environmentInfo` object:

```javascript
import { environmentInfo } from './src/global.js';
console.log('Environment Info:', environmentInfo);
```

## EAS Build Configuration

For EAS builds, the environment is automatically detected:
- **Development builds**: Use development URLs
- **Production builds**: Use production URLs

The environment is determined by the `__DEV__` variable and the app configuration.
