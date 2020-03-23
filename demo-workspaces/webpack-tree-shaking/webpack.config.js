const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const path = require('path')

module.exports = {
  mode: 'development',
  // mode: 'production',
  optimization: {
    usedExports: true,
    minimize: false,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/env', '@babel/react'],
            plugins: [
              [
                'import',
                {
                  libraryName: '@alicloud/console-components',
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { parser: { system: false } },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  externals: [
    // function(context, request, callback) {
    //   if (/^@alifd\/next/.test(request)) {
    //     return callback(null, 'commonjs ' + request)
    //   }
    //   callback()
    // },
    function(context, request, callback) {
      if (/^core-js/.test(request)) {
        return callback(null, 'commonjs ' + request)
      }
      callback()
    },
    function(context, request, callback) {
      if (/^@babel\/runtime-corejs2/.test(request)) {
        return callback(null, 'commonjs ' + request)
      }
      callback()
    },
    {
      moment: 'moment',
      react: 'react',
      'react-dom': 'react-dom',
    },
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new BundleAnalyzerPlugin(),
  ],
}
