module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignore source map warnings
      webpackConfig.ignoreWarnings = [
        {
          module: /react-parallax-tilt/,
        },
        /Failed to parse source map/,
      ];
      return webpackConfig;
    },
  },
};
