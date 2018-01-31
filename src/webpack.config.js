const path = require('path');

module.exports = {
    entry: {
        app: './script/main.ts'
    },
    module: {
        loaders: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
  output: {
    filename: './[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
