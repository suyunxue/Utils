'use strict'
const utils = require('./utils')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.pre.conf')
const prodWebpackConfig = require('./webpack.prod.conf')

const webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    plugins: prodWebpackConfig.plugins
})

module.exports = webpackConfig