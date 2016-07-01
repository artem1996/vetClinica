const webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: {
        clients: "./clients/index.jsx",
        regClient: "./regClient/index.jsx"
    },
    output: {
        path: __dirname + '/public/js/',
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jsx$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            }
        ]
    }
};