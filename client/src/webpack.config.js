const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {

    entry: ['babel-polyfill','./index.js'],
    output: {
                path: path.resolve(__dirname,'../dist'),
                filename: 'bundle.js'

    },
    devServer: {
        contentBase: '../dist'
    },
    plugins : [
                    new HtmlWebpackPlugin({
                            filename: 'index.html',
                            template: './index.html'

                    })

    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    


}
console.log("PATH: " + path.resolve(__dirname));
console.log("PATH2: " + path.resolve(__dirname,'../dist'));