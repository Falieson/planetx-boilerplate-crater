import path from 'path'
import webpack from 'webpack'
import AssetsPlugin from 'assets-webpack-plugin'
import HappyPack from 'happypack'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import MeteorImportsPlugin from 'meteor-imports-webpack-plugin'

const {ROOT_URL} = process.env

const root = path.resolve(__dirname, '..')
const srcDir = path.resolve(root, 'src')

const vendor = [
  'react',
  'react-dom',
]

export default {
  context: root,
  entry: {
    app: './src/client/index.js',
    vendor
  },
  output: {
    filename: '[name]_[chunkhash].js',
    chunkFilename: '[name]_[chunkhash].js',
    path: path.join(root, 'build', 'static'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 50000}),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}, comments: /(?:)/}),
    new webpack.NoErrorsPlugin(),
    new AssetsPlugin({path: path.join(root, 'build'), filename: 'assets.json'}),
    new webpack.DefinePlugin({
      '__CLIENT__': true,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.IgnorePlugin(/\/server\//),
    new HappyPack({
      cache: false,
      loaders: ['babel'],
      threads: 4
    }),
    new ProgressBarPlugin(),
    new MeteorImportsPlugin({
      ROOT_URL,
      DDP_DEFAULT_CONNECTION_URL: ROOT_URL,
      PUBLIC_SETTINGS: {},
      meteorFolder: 'meteor',
      meteorEnv: { NODE_ENV: 'production' },
      exclude: ['ecmascript']
    }),
  ],
  module: {
    loaders: [
      {test: /\.json$/, loader: 'json-loader', include: [srcDir, 'node_modules']},
      {test: /\.txt$/, loader: 'raw-loader'},
      {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, loader: 'url-loader?limit=10000'},
      {test: /\.(eot|ttf|wav|mp3)$/, loader: 'file-loader'},
      {
        test: /\.css$/,
        loader: 'style!css',
        include: [srcDir]
      },
      {
        test: /\.js$/,
        loader: 'happypack/loader',
        include: [srcDir]
      }
    ]
  }
}