var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    bundle: './app.jsx',
    vendors: [
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: '[name].js',
    publicPath: '/assets/',
    path: path.join(__dirname, 'public', 'assets')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: 'babel-loader',
        include: path.resolve('src'),
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
  ],
  externals: { // 由於 config 模組在使用的時候會去載入環境變數讀取檔案，在 react 端是無法使用的，因此可透過 externals 傳入物件或字串的方式來解決這個問題
    config: JSON.stringify(require('config'))
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: { // 從模組之中單獨取出特定的檔案進行打包放在 vendors 裡面，這樣做可以省去打包過多的檔案
      'react$': 'react/dist/react.min.js',
      'react-dom$': 'react-dom/dist/react-dom.min.js',
      Source: __dirname + '/src'
    }
  }
};