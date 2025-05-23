const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        // remote1: 'remote1@http://localhost:3001/mf-manifest.json',
        remote2: 'remote2@http://localhost:3002/mf-manifest.json',
      },
      dev: true,
      dts: {
        consumeTypes: true,
      },
      // runtimePlugins: [
      //   "./node_modules/@module-federation/dts-plugin/dist/dynamic-remote-type-hints-plugin.js",
      // ],
      shared: {
        react: {
            singleton: true,
            requiredVersion: '^18.3.1',
        },
        'react-dom': {
            singleton: true,
            requiredVersion: '^18.3.1',
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
  watchOptions : {
    ignored: ['**/node_modules/**', '**/@mf-types/**'],
  }
};
