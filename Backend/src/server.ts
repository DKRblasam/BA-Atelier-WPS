import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { pool1, pool2 } from './config/db';

// Cargar variables de entorno desde config/
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para obtener datos de las dos bases de datos
app.get('/api/data', async (_req, res) => {
  try {
    // Consultar datos de la primera base de datos
    const [citas] = await pool1.query('SELECT * FROM Citas');
    const [clientes] = await pool1.query('SELECT * FROM Clientes');
    const [comentarios] = await pool1.query('SELECT * FROM Comentarios');
    const [pagos] = await pool1.query('SELECT * FROM Pagos');

    // Consultar datos de la segunda base de datos
    const [facturas] = await pool2.query('SELECT * FROM Facturas');
    const [productos] = await pool2.query('SELECT * FROM Productos');

    // Responder con los datos de ambas bases de datos
    res.json({ citas, clientes, comentarios, pagos, facturas, productos });
  } catch (error) {
    res.status(500).json({ error: 'Error en la base de datos', details: error });
  }
});

// Iniciar servidor
const PORT = process.env.MYSQL_ADDON_PORT_U || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
