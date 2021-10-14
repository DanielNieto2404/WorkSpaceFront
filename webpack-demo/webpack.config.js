const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
    plugins: [
        new CopyPlugin({
            patterns: [
                "relative/path/to/file.ext",
                "relative/path/to/dir",
                path.resolve(__dirname, "src", "file.ext"),
                path.resolve(__dirname, "src", "dir"),
                "**/*",
                {
                  from: "**/*",
                },
                // If absolute path is a `glob` we replace backslashes with forward slashes, because only forward slashes can be used in the `glob`
                path.posix.join(
                  path.resolve(__dirname, "src").replace(/\\/g, "/"),
                  "*.txt"
                ),
              ],
        }),
      ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};