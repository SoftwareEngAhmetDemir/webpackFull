const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
    mode: 'development',
  entry: ['./src/index.js','./src/index.css','./src/style.scss'],

  module: {
    rules: [
      
       {
         test: /\.css$/i,
         use: [MiniCssExtractPlugin.loader, "css-loader"],
       },
    
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
           
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    
    
    
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    clean: true,
  },
  devServer: {
    
    port: 8008,
    watchFiles:['src/**/*'] // to detect changes on all files inside src directory
 },
  plugins: [new HtmlWebpackPlugin({
      template:'./src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
  }),]
};
