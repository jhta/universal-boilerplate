import webpack from 'webpack';

const config = require('../webpack.config.dev');
const compiler = webpack(config);

const webpackMiddleware = require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    assets: true,
    colors: true,
    timings: true,
    chunks: true,
    chunkModules: true
  }
});


const hotModuleMiddleware = require('webpack-hot-middleware')(compiler);

module.exports = {
  webpackMiddleware,
  hotModuleMiddleware
};
