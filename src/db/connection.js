import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde .env
dotenv.config();

// Extraer las variables de entorno
const dbName = process.env.DB_NAME || 'logistica_db';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || 'root';
const dbHost = process.env.DB_HOST || 'localhost';
const dbDialect = process.env.DB_DIALECT || 'mysql';
const dbPort = process.env.DB_PORT || '3306';

// Crear una instancia de Sequelize
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
  port: dbPort,
  logging: false, // Desactiva los logs SQL
});

// Exporta la instancia para usarla en otros lugares
export default sequelize;
