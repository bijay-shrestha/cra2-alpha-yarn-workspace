// to use run: node analyzeBuild.js

// eslint-disable-next-line prefer-destructuring
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.env.NODE_ENV = 'production';

const webpackConfigProd = require('@f1lt3r/react-scripts/config/webpack.config.prod');

webpackConfigProd.plugins.push(
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'report.html'
  })
);

require('react-scripts/scripts/build');
