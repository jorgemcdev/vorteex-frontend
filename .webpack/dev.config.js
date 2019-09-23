const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'js/[name].[hash].js',
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../build'),
    compress: false,
    host: '0.0.0.0',
    port: 3001,
    stats: 'errors-only',
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|ico)/,
        use: [
          'file-loader?name=./images/[name].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[hash].[ext]'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      title: 'Vorteex',
      favicon: 'public/vorteex.ico',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
      options: { url: false }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
