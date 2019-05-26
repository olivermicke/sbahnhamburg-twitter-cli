module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'sbahnhamburg-twitter-cli.js',
    path: __dirname + '/dist',
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
