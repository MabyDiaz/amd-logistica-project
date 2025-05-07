import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Camionero = sequelize.define('Camionero', {
  cuil: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true
  },
  domicilio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  salario: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
}, {
  tableName: 'Camionero',
  timestamps: false
});

export default Camionero;