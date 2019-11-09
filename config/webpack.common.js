const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 从根目录走
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    context: path.resolve(__dirname, '../'), // 入口起点根目录
    entry: {
        app: './src/index.js'
    },
    output: {
        path: resolve('build'),
        filename: '[name].js',
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'}),
        new CleanWebpackPlugin()
    ]
}