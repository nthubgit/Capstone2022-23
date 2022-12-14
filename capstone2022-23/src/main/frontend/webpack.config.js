// entry -> output

const path = require('path');

module.exports = {
    entry: ['regenerator-runtime/runtime.js', './src/app.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            use: [
                
            ], 
            test: /\.s?css$/
        }
    ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true //makes routing clientside
    }
};


