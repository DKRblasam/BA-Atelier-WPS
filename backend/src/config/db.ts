import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

// Verificar que las variables de entorno estén definidas
if (!process.env.BA_URL) {
  throw new Error(
    "Las variables de entorno DB_URL_1 o DB_URL_2 no están definidas."
  );
}

// Crear pool de conexiones para la primera base de datos
const pool1 = mysql.createPool(process.env.BA_URL!);

// Exportar ambos pools
export { pool1 };

