const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',

    entry: {
        main: ['./main.js']
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './distdev'
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'distdev'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: 'pre'
            },

            {
                test: /\.js$/, exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            ['@babel/plugin-transform-react-jsx', {useBuiltIns: true}],
                            ['@babel/plugin-proposal-object-rest-spread', {useBuiltIns: true}]
                        ]
                    }
                }]
            }
        ]
    },

    plugins: [
        new htmlPlugin({
            templateContent: `
                <!DOCTYPE html>
                <html xmlns="http://www.w3.org/1999/xhtml" lang="pt-BR">
                    <head>
                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                        <meta http-equiv="Content-Language" content="pt-BR" />

                        <meta name="charset" content="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta name="author" content="Lívia Simões" />

                        <title>My Reads</title>
                    </head>

                    <body>
                        <div id="react-app"></div>
                    </body>
                </html>
            `
        })
    ]
}
