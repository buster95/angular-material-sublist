var webpack = require('webpack');
var extractWebpack = require('extract-text-webpack-plugin');
var cssoWebpack = require('csso-webpack-plugin').default;

module.exports = {
    entry: {
        "angular-material-sublist": __dirname + '/directive/md-sublist.js',
        "angular-material-sublist.min": __dirname + '/directive/md-sublist.js'
    },
    output: {
        "path": __dirname + "/",
        "filename": "[name].js",
        "publicPath": "./"
    },
    resolve: {
        extensions: ['.html', '.js', '.css']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            removeComments: true
                            //collapseWhitespace: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: extractWebpack.extract({
                    // fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        }),
        new extractWebpack('angular-material-sublist.css'),
        new cssoWebpack({ pluginOutputPostfix: 'min' })
    ]
};