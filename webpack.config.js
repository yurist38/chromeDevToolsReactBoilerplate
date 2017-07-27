const path = require('path');

module.exports = {
  entry: [
    path.resolve('./src/components/index.jsx')
  ],
  output: {
    path: path.resolve('./build/'),
    filename: 'app.js',
    publicPath: '.'
  },
  module: {
    loaders: [
      {
        test: /\.jsx/,
        include: path.resolve('./src/components/'),
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader?importLoaders=1',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {loader: 'sass-loader'},
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('postcss-cssnext')
                ];
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  }
};
