import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Camion = sequelize.define(
  'Camion',
  {
    patente: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacidadDeCarga: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'Camion',
    timestamps: false,
  }
);

export default Camion;
