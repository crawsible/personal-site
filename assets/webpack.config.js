module.exports = {
  entry: './js/index.jsx',
  output: {
    path: '.',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel', 'jsx'],
      exclude: /node_modules/,
    }],
  },
};
