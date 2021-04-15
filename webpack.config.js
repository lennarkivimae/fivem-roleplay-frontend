const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
// const RemovePlugin = require('remove-files-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

const getRules = (type) => {
  let rules = [
    {
      test: /\.tsx?$/,
      use: [
        'ts-loader',
        'eslint-loader'
      ],
      exclude: /node_modules/,
    },
  ];

  if (type === 'gui') {
    rules = [
      ...rules,
      {
        test: /\.scss?$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'sass-loader',
          },
          // potential sass resource loader
        ],
        exclude: /node_modules/,
      }
    ]
  }

  return rules;
}

const getModules = (type) => {
  return {
    rules: getRules(type),
  }
}

const getPlugins = (type) => {
  let plugins = [];

  if (type === 'gui') {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: './gui.css',
      }),
      new StylelintPlugin({
        files: 'src/**/*.scss',
        fix: true,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'src/gui/patterns/assets',
            to: './assets'
          }
        ]
      })
    );
  }

  return plugins;
}

const getOutput = (type) => {
    return {
      filename: type + '.js',
      path: path.resolve(buildPath, type),
    }
}

const client = {
  entry: './src/client/index.ts',
  module: getModules('client'),
  plugins: getPlugins('client'),
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: getOutput('client')
}

const gui = {
  entry: './src/gui/index.tsx',
  module: getModules('gui'),
  plugins: getPlugins('gui'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss']
  },
  output: getOutput('gui')
}

module.exports = [client, gui];

