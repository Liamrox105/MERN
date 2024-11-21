import express from "express";
import cors from 'cors';
// Conexion a la base de datos
import db from "./database/db.js";
// Enrutador
import blogRoutes from './routes/Routes.js';

const app = express();

// Configuración de middlewares
app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);

// Función asíncrona para la conexión a la base de datos
const startServer = async () => {
    try {
        await db.authenticate(); 
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log(`Error en la conexión: ${error}`);
        return; 
    }

    // Arrancar el servidor después de verificar la conexión
    app.listen(8000, () => {
        console.log('Servidor iniciado en http://localhost:8000/');
    });
};

// Llama a la función para iniciar la conexión y el servidor
startServer();

// Ruta de prueba
//app.get('/', (req, res) => {
//    res.send('Hola Mundo');
//});
