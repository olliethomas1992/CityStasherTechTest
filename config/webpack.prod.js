const webpack = require("webpack");
const path = require("path");
const glob = require("glob-all");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");

const baseConfig = require("./webpack.base.js");

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g);
    }
}

delete baseConfig.module.rules;

const config = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                config: {
                                    path: "./config/postcss.config.js"
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new ExtractTextPlugin("[name].[chunkhash].css"),
        new PurgecssPlugin({
            paths: glob.sync([
                path.join(__dirname, "../src/**/*.js"),
                path.join(__dirname, "../src/**/*.html")
            ]),
            extractors: [
                {
                    extractor: TailwindExtractor,
                    extensions: ["js", "html"]
                }
            ]
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "[name].[hash].js",
            minChunks: Infinity,
            chunks: ["vendor", "index"]
        })
    ]
};

module.exports = merge(baseConfig, config);
