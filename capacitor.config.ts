import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.biotracker.app',
  appName: 'Attendance Tracker',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      showSpinner: false,
      launchShowDuration: 3000,
      launchAutoHide: false
    }
  },
  server: {
    // Keep HTTPS for security, but allow fallback for development
    androidScheme: 'https'
  },
  android: {
    // Realistic minimum for Angular 16 with better compatibility
    minWebViewVersion: 55, // Balanced approach for older devices
    allowMixedContent: false, // Security: no mixed content
    webContentsDebuggingEnabled: true // Enable debugging for development
  }
};

export default config;
