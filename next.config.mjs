import { withSentryConfig } from '@sentry/nextjs';

const moduleExports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96]
},
  webpack: (config) => {
    // Custom webpack configurations can be added here
    return config;
  },
  optimization: {
    minimize: true,
    minimizer: [
      // Custom minimization strategies can be added here
    ]
},
  experimental: {
    optimizeImages: true
}
};

// Add Sentry configuration if needed
const sentryWebpackPluginOptions = {
  // Additional Sentry options can be added here
};

export default withSentryConfig(moduleExports, sentryWebpackPluginOptions);