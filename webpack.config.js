const webpack = require('webpack');
const { merge } = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_API_BASE_URL: JSON.stringify(
          process.env.REACT_APP_API_BASE_URL,
        ),
        REACT_APP_IMAGE_URL: JSON.stringify(process.env.REACT_APP_IMAGE_URL),
        REACT_APP_API_KEY: JSON.stringify(process.env.REACT_APP_API_KEY),
      },
    }),
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
