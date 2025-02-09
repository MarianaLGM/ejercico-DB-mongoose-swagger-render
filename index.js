/*PASO 1: Crear un Servidor Express
    -Lo primero creamos un servidor de express y lo levantamos.
    -Para ello inicializamos proyecto de node e instalamos dependencias:
    Instalamos express para crear el servidor, mongoose para la conexión a la base de datos y dotenv para poder usar las variables de entorno.
        -npm init -y
        -npm i express mongoose dotenv
        -npm install mongodb
    -crearemos el .gitignore*/

const express = require('express');
const app = express();
const PORT = 3000;
const { dbConnection } = require('./config/config');
const routes = require('./routes/tasks')
const mongoose = require("mongoose");

//const { MONGO_URI } = require("./.env");
const swaggerUI = require('swagger-ui-express') //SWAGGER 3: a)Importamos swaggerUi
const docs = require('./docs/index')//SWAGGER 3: b)Importamos el index.js de la carpeta docs


app.use('/', routes);

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))//SWAGGER 3: b)Importamos el index.js de la carpeta docs

dbConnection();

//app.listen(PORT, () => console.log("Server started on port" +3000));//SWAGGER 3: c)Importamos el index.js de la carpeta docs
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
/*PASO 1-BIS
npm i swagger-ui-express

SWAGGER 3:
a-Importamos swaggerUi
b-Importamos el index.js de la carpeta docs
c-Creamos una ruta para poder ver la documentación creada
-En el navegador, abrimos nuestra página de documentación desde http://localhost:3000/api-docs.
*/



