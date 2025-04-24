import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
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
