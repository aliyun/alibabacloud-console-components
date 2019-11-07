const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = require('./env')
const path = require('./path')

module.exports = () => {
  const cssExtractLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: env.isDevelopment(),
    },
  }

  return {
    mode: env.isProduction() ? env.PROD : env.DEV,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve('babel-loader'),
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            cssExtractLoader,
            'css-loader',
          ],
        },
        {
          test: /\.less$/,
          use: [
            cssExtractLoader,
            'css-loader',
            'less-loader',
          ],
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            cssExtractLoader,
            'css-loader',
            'fast-sass-loader',
          ],
        },
      ],
    },
    resolve: {
      modules: [
        path.NODE_MODULES,
        path.WORKSPACE_ROOT_NODE_MODULES,
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
    stats: {
      // as 'minimal' but with colored stdout
      all: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      // our additional options
      moduleTrace: true,
      errorDetails: true,
      colors: true,
    },
  }
}
