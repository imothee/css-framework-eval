// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./pure/app.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    publicPath: "/",
    contentBase: "./pure"
  },
  module: {
    rules: [ 
      { 
        test: /\.s?css$/, 
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?minimize=true!sass-loader' })
      }
    ]
  },
   plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};