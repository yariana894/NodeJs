npm init
npm install node-sass

    Crear el script en package.json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "scss": "node-sass --watch scss --output css"
    },

npm run scss