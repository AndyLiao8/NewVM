const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getPath = p => path.resolve(__dirname, p);

const config = {
  devtool: 'source-map',
  mode: 'production',
  entry: getPath('./src/main.ts'),
  output: {
    publicPath: getPath('./dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
        include: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    alias: {
      src: getPath('./src'),
    },
    extensions: ['.ts', '.tsx','.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ],
};

const devServer = {
  historyApiFallback: true,
  hot: true,
  inline: true,
  contentBase: getPath('./dist'),
  stats: {
    assets: false,
    chunkModules: false,
    children: false,
    colors: true,
    chunks: false,
    errors: true,
    errorDetails: true,
  },
  noInfo: false,
};

const server = new WebpackDevServer(webpack(config), devServer)
  .listen(3303, '0.0.0.0', (err) => {
    if (err) {
      console.log('Webpack Dev Server encounters error: ', err);
    }
    console.log([
      'Compilling...',
      `Bundle will be servered on http://localhost:3303`,
    ].join('\n'));
  });

module.exports = server;