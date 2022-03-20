const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: 'F:\\Clase\\programming_java_script\\EjercicioCompleto\\src\\app.js',

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    },





    plugins: [
        new HtmlWebpackPlugin({
            template: 'F:\\Clase\\programming_java_script\\EjercicioCompleto\\src\\index.html'
        })
    ]

}
