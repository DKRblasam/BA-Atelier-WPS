import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
<<<<<<< HEAD
import path from 'path';

// Cargar variables de entorno desde config/
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Verificar que las variables de entorno estén definidas
if (!process.env.MYSQL_ADDON_URL || !process.env.MYSQL_ADDON_URI) {
  throw new Error('Las variables de entorno MYSQL_ADDON_URL o MYSQL_ADDON_URI no están definidas.');
}

// Desestructurar las partes de la URL
const parseUrl = (url: string) => {
  const regex = /mysql:\/\/([^:]+):([^@]+)@([^:]+):([^\/]+)\/([^?]+)/;
  const match = url.match(regex);

  if (match) {
    const [, user, password, host, port, database] = match;
    return { user, password, host, port, database };
  }
  throw new Error('La URL de conexión no es válida');
};

// Crear pool de conexiones para la primera base de datos
const { user, password, host, port, database } = parseUrl(process.env.MYSQL_ADDON_URL!);
const pool1 = mysql.createPool({
  host,
  user,
  password,
  port: parseInt(port, 10),
  database,
});

// Crear pool de conexiones para la segunda base de datos
const { user: user2, password: password2, host: host2, port: port2, database: database2 } = parseUrl(process.env.MYSQL_ADDON_URI!);
const pool2 = mysql.createPool({
  host: host2,
  user: user2,
  password: password2,
  port: parseInt(port2, 10),
  database: database2,
});

// Exportar ambos pools
export { pool1, pool2 };
=======

// Cargar las variables de entorno
dotenv.config();

// Verificar que las variables de entorno estén definidas
if (!process.env.BA_URL || !process.env.US_URL) {
  throw new Error('Las variables de entorno DB_URL_1 o DB_URL_2 no están definidas.');
}

// Crear pool de conexiones para la primera base de datos
const pool1 = mysql.createPool(process.env.BA_URL!);

// Crear pool de conexiones para la segunda base de datos
const pool2 = mysql.createPool(process.env.US_URL!);

// Exportar ambos pools
export { pool1, pool2 };

export class servicio {
  static async getClientes() {
    const [rows] = await pool1.query('SELECT * FROM clientes');
    return rows;
  }

  static async getClientes2() {
    const [rows] = await pool2.query('SELECT * FROM clientes');
    return rows;
  }
}
>>>>>>> e09be7a41a88c5f155c83bc86ac474ac5a61a1ae
