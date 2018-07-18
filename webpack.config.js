const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.scss$/,
        exclude: /styles\/index\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64:5]',
              sourceMap: true,
              minimize: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /styles\/index\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin],
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
};
