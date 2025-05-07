// src/models/Provincia.js
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Provincia = sequelize.define(
  'Provincia',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'Provincia',
    timestamps: false,
  }
);

export default Provincia;
