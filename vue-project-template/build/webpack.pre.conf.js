'use strict'
const config = require('../config')
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
    output: {
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPrePath : config.dev.assetsPublicPath
    }
})
