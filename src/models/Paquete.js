// src/models/Paquete.js
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Paquete = sequelize.define('Paquete', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  peso: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  destino: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Paquete',
  timestamps: false
});

export default Paquete;