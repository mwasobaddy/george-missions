const CompressionPlugin = require('compression-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Enable compression
      webpackConfig.plugins.push(
        new CompressionPlugin({
          test: /\.(js|css|html|svg)$/,
          algorithm: 'gzip',
        })
      );

      // Enable service worker for caching
      webpackConfig.plugins.push(
        new WorkboxPlugin.GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images',
                expiration: {
                  maxEntries: 60,
                  maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
                },
              },
            },
            {
              urlPattern: /\.(?:js|css)$/,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'static-resources',
              },
            },
          ],
        })
      );

      return webpackConfig;
    },
  },
}; 