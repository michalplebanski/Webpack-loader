const path = require('path');

module.exports = (env) => {
    const enviorment = env || 'production';

    return {
        mode: enviorment,
        entry: './src/index.js',
            output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.' + enviorment + '.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader'},
                        {
                          loader: 'css-loader',
                          options: {
                              modules: true
                            }
                        }
                    ]
                }
            ]
        }
    }
};