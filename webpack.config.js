module.exports = {
    entry: __dirname + '/app.jsx',
    output: {
        path: __dirname,
        filename: 'app.js'
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: ['node_modules'],
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        }]
    },
}
