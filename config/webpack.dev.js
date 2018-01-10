const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const WebpackNotifier = require("webpack-notifier");
const webpack = require('webpack');


const config = {
    output: {
        filename: "[name].[hash].js"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "../dist",
        stats: {
            modules: false
        },
        historyApiFallback: true
    },
    plugins: [
        new WebpackNotifier({
            title: "City Stasher Frontend Test",
            excludeWarnings: true,
            alwaysNotify: true,
            contentImage: path.join(__dirname, "../src/assets/images/logoblack.png")
        })
    ]
};

module.exports = merge(baseConfig, config);