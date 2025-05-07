import sequelize from '../db/connection.js';

// Importa todos los modelos (con extensiones .js)
import Camionero from './Camionero.js';
import Camion from './Camion.js';
import Conduccion from './Conduccion.js';
import Paquete from './Paquete.js';
import Provincia from './Provincia.js';

// --- Definir Asociaciones ---

// Relaciones: Camionero - Paquetes
Camionero.hasMany(Paquete, { foreignKey: 'cuilCamionero' });
Paquete.belongsTo(Camionero, { foreignKey: 'cuilCamionero' });

// Relaciones: Provincia - Paquetes
Provincia.hasMany(Paquete, { foreignKey: 'idProvincia' });
Paquete.belongsTo(Provincia, { foreignKey: 'idProvincia' });

// Relaciones: Camionero - Conducciones
Camionero.hasMany(Conduccion, { foreignKey: 'cuilCamionero' });
Conduccion.belongsTo(Camionero, { foreignKey: 'cuilCamionero' });

// Relaciones: Camion - Conducciones
Camion.hasMany(Conduccion, { foreignKey: 'patenteCamion' });
Conduccion.belongsTo(Camion, { foreignKey: 'patenteCamion' });

// Exporta la instancia de sequelize y todos los modelos
export { sequelize, Camionero, Camion, Conduccion, Paquete, Provincia };
