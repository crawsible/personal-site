module.exports = {
  entry: './app.jsx',
  output: {
    path: '_builds',
    filename: 'app.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
      },
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }],
  },
  resolve: {
    modulesDirectories: ['node_modules', 'javascripts', 'stylesheets'],
  },
};
