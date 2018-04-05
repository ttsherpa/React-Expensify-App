const path = require('path');

module.exports = {
    //"./src/app.js"
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), 
        filename: 'bundle.js'
    },

    //module is used create rules to perform on .js files only and excluding the node_modules.
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]

        }]
    },
    //devtool allows debugging to be way more efficient using the react chrome tool.
    devtool: 'cheap-module-eval-source-map',
    //devServer allows for dev server from webpack instead of live server 
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};


