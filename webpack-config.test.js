const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  target: 'node',
  externals: [nodeExternals()]
});
