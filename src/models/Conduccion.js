import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Conduccion = sequelize.define(
  'Conduccion',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cuilCamionero: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Camionero',
        key: 'cuil',
      },
    },
    patenteCamion: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Camion',
        key: 'patente',
      },
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: 'Conduccion',
    timestamps: false,
  }
);

export default Conduccion;
