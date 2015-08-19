'use strict';
var path = require("path");
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var webpack_config = {
    externals: { jquery: "jQuery" },
    plugins : [new webpack.ProvidePlugin({
        $ : "jquery",
        ht : "highstock-browserify",
    })],
    entry: "./entry.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        libraryTarget : "var",
        library : "awesome"
    },
    devtool : "source-map",
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(webpack_config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

/**
 * A webpack dev server support hot  module replacement and live reload
 * 
 */
gulp.task("dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(webpack_config);

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(6000, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:6000/index.html");

        // keep the server alive or continue?
        // callback();
    });
});