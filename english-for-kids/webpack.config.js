const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/components/app.js',
  output: {
    filename: './main.js',
    path: path.resolve(__dirname, 'src/js/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: '/src/assets/img',

      },
    ],
  },
};