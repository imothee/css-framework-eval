// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./uikit/app.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    publicPath: "/",
    contentBase: "./uikit"
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