const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
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
            use: CSSExtract.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            })
        }]
    },
    plugins: [
        CSSExtract
    ],
    //devtool allows debugging to be way more efficient using the react chrome tool.
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    //devServer allows for dev server from webpack instead of live server 
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
    };
};




