const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const env = JSON.stringify(process.env.NODE_ENV || 'development');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'styles', 'global.scss'),
    path.resolve(__dirname, 'src', 'index.js')
  ],
  mode: env !== 'production' ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'styleguide'
  },
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      '@styleguide/src': path.resolve(__dirname, 'src')
    }
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      umd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    },
    lodash: 'lodash',
    classnames: 'classnames'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                context: __dirname,
                plugins: [autoprefixer()]
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
        options: {
          esModule: false
        }
      }
    ]
  },
  node: {
    __dirname: false
  },
  optimization: {
    minimize: env !== 'development'
  },
  plugins: [
    // new CleanWebpackPlugin(['build'], {
    //   exclude: ['package.json']
    // }),
    new ExtractTextPlugin({
      filename: 'styleguide.css',
      allChunks: true
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': env }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};
