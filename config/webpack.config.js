module.exports = {
  module: {
    entry: './app.js',
    output: {
      filename: './bundle.js'
    },
    loaders: [
      {
        test: /\.js?$/,
        exclude: ['/node_modules/', '/client/common/govuk/'],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
