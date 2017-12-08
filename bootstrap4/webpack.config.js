// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./bootstrap4/app.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    publicPath: "/",
    contentBase: "./bootstrap4"
  },
  module: {
    rules: [ 
      { 
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?minimize=true!sass-loader' })
      }
    ]
  },
   plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};