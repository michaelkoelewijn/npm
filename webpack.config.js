const config = {
    devtool: false,
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: __dirname + '/dist',

        //Not including these will add all dependencies in the build file
        //Remove to get a shareable JS file
        library: 'MyPackage',
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
    }
};

module.exports = [{
    ...config
}];