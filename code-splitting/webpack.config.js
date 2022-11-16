var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'none', // production -> 실무, development -> 개발, none
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  //**css 분리 x */
  //loader
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       //순서 지켜야함
  //       use: ['style-loader', 'css-loader']
  //     }
  //     //scss
  //     // {
  //     //   test: /\.scss$/,
  //     //   use: ['style-loader', 'css-loader','sass-loader']
  //     // }
  //   ]
  // }

  /**css 분리 loader 작성 */
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
};
