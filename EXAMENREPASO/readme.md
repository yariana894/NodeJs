npm init --yes
npm i express cors node-fetch
npm i -D nodemon

añadir "start": "nodemon index.js" -> package.json
añadir  "type": "module", -> package.json

npm i body-parser
añadir:
-app.use(bodyParser.urlencoded({ extended: false }))
-app.use(bodyParser.json())

npm run start

/*=================EJERCICIO03==============*/
**Instalación**
> npm init -y
> npm i -D webpack webpack-cli
> Creamos src (metemos app.js)
> Creamos directorio build
> Creamos webpack.config.js (Usar el que ya está)

> Editamos Scripts package.json
"build": "webpack --mode=development",
"build:prod": "webpack --mode=production",
"dev": "webpack serve --mode=development --open"

Construiimos el proyecto (para desarrollo y produccion)
> npm run build
> npm run build:prod


**PLUGINS**
<html-webpack-plugin>
>npm i -D html-webpack-plugin
>Editamos webpack.config.js

[Fuera]
const HtmlWebpackPlugin = require('html-webpack-plugin')

[Dentro]
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html'
})
]


para probar
> npm run dev


<CSSLOADER>
> npm i -D style-loader css-loader
añadimos en el webpack.config.js
module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },

> Importamos el css en app.js
> npm run dev

<SASS>
>npm i -D sass-loader sass
>Configuramos el webpack.config.js
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
            }

> Añadimos un fichero en el src: styles.scss
> Hacemos las ediciones oportunas
> Lo importamos en app.js
> npm run dev

<EMPAQUETAR_IMAGENES>
> npm install image-minimizer-webpack-plugin imagemin --save-dev
> npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo --save-dev
> Añadimos las configuraciones
[EnModules]
{
test: /\.(jpe?g|png|gif|svg)$/i,
type: "asset",

                generator: {
                    filename: 'images/design/[name].[hash:6][ext]',
                  },
            },

#####[DebajoDePlugins]#####
optimization: {
minimizer: [
"...",
new ImageMinimizerPlugin({
minimizer: {
implementation: ImageMinimizerPlugin.imageminMinify,
options: {
// Lossless optimization with custom option
// Feel free to experiment with options for better result for you
plugins: [
["gifsicle", { interlaced: true }],
["jpegtran", { progressive: true }],
["optipng", { optimizationLevel: 5 }],
// Svgo configuration here https://github.com/svg/svgo#configuration
[
"svgo",
{
plugins: extendDefaultPlugins([
{
name: "removeViewBox",
active: false,
},
{
name: "addAttributesToSVGElement",
params: {
attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
},
},
]),
},
],
],
},
},
}),
],
},



tailwind:
-npm i tailwindcss
-npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
-npx tailwindcss init
-introducir en el html: 
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-wnea99uKIC3TJF7v4eKk4Y+lMz2Mklv18+r4na2Gn1abDRPPOeef95xTzdwGD9e6zXJBteMIhZ1+68QC5byJZw==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />


==========si quiero mezclar todo, que va a ser que no espero===============
Página de plantillas: https://v1.tailwindcss.com/components/forms
Documentación: https://tailwindcss.com/docs/installation

<OJITO>
Para usar TailWind con webpack hay que hacer como si fuese algo "nuevo". Como
se mezcle con algo de webpack va explotar.
Así que o mezclas con cuidado o hacer un proyecto frontend aparte pero con Tailwind


<Instalación>

> npm install -D tailwindcss
> npx tailwindcss init
> Crea el directorio <dist>
> Crea en <dist> el fichero "output.css"
> En <src> mete "input.css" y NOMBREQUEQUIERAS.css (no puede ser styles.css con webpack) por ejemplo: "tailwindstyles.css"
> En el <css NOMBREQUEQUIERES.css> añade lo siguiente:
@tailwind base;
@tailwind components;
@tailwind utilities;
> En <src> crea un nuevo html ajeno al webpack, por ejemplo: IndexTailwind.html
> En el <html nuevo> introduce en el HEAD:
<link href="/dist/output.css" rel="stylesheet">

> npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
> Ctrl + C para cerrar lo de consola
> Para probar el Tailwind ejecutas el html ajeno al webpack que creaste
> Puedes probar con alguna plantilla de aquí: https://v1.tailwindcss.com/components/forms