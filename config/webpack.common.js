var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = function (options) {
  return {
    entry: {
      'polyfills': './src/polyfills.ts',
      'vendor': './src/vendor.ts',
      'app': './src/main.ts'
    },

    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        materializecss: 'materialize-css/dist/css/materialize.css',
        materialize: 'materialize-css/dist/js/materialize.js'       ,
        fontawesomecss: 'font-awesome/css/font-awesome.css',
      }
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          loaders: [
            {
              loader: 'awesome-typescript-loader',
              options: { configFileName: helpers.root('src', 'tsconfig.json') }
            }, 'angular2-template-loader'
          ]
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file-loader?name=assets/[name].[hash].[ext]'
        },
        {
          test: /materialize-css\/dist\/js\/materialize\.js/,
          loader: 'imports?materializecss'
        },
        { test: /materialize\.css$/, loader: 'style-loader!css-loader' },
        
        {
          test: /^((?!materialize).)*\.css$/,
          exclude: helpers.root('src', 'app'),
          loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
        },
        {
          test: /^((?!materialize).)*\.css$/,
          include: helpers.root('src', 'app'),
          loader: 'raw-loader'
        },
        //{ test: /^((?!materialize).)*\.css$/, loaders: ['to-string-loader', 'css-loader'] },
        {
          test: /chart.js\/src\/chart\.js/,
          loader: 'imports?chartjs'
        }       
      ]
    },

    plugins: [
      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('./src'), // location of your src
        {} // a map of your routes
      ),

      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
      }),

      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
        baseUrl: options.ENV == 'production' ? '' : '/'
      })
    ]
  }
};


