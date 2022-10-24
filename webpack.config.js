const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },

  module: {
    // loader配置
    rules: [
      // 详细loader配置
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader
        use: [
          // use数组中，loader执行顺序：从右到左，从下到上依次执行
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs的模块加载到js中
          //里面的内容是样式字符串
          'css-loader'
        ]
      }
    ],
  },

  // plugins的配置
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development'
}