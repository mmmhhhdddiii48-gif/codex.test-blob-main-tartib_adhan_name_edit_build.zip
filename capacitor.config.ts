import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tarteeb.notebook',
  appName: 'Tarteeb',
  webDir: '.',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
