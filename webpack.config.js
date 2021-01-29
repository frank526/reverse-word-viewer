const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const basePath = __dirname;
const distPath = 'dist';
const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./src/main.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: '[chunkhash][name].js'
    },
    module: {
      rules: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: ['babel-loader']
          },
         {
             test:  /\.css/,
             exclude: /node_modules/,
             use: ['style-loader','css-loader']
         }
      ],

  },
    plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html', 
          template: './src/index.html',
      })
  ]
};
module.exports = webpackInitConfig;
