const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      
       {
         test: /\.css$/i,
         use: ["style-loader", "css-loader"],
       },
    
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
           
          }
        ]
      }]
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
  })],
};