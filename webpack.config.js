const config = {
    devtool: false,
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'faq.js',
        path: __dirname + '/dist',
        library: 'FAQ',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015-ie',
                        ],
                    },
                },
            },
        ],
    },
};

module.exports = [
    config
];