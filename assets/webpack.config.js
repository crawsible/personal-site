module.exports = {
  entry: {
    index: './index.js',
    projects: './projects.js',
  },
  output: {
    path: 'builds',
    filename: '[name].js',
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
