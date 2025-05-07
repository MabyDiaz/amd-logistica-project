import express from 'express';
import { sequelize } from './src/models/index.js';

// Importar las rutas
import camioneroRoutes from './src/routes/camionero.routes.js';
import camionRoutes from './src/routes/camion.routes.js';
import conduccionRoutes from './src/routes/conduccion.routes.js';
import paqueteRoutes from './src/routes/paquete.routes.js';
import provinciaRoutes from './src/routes/provincia.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Backend funcionando!');
});

// Usar las rutas
app.use('/camionero', camioneroRoutes);
app.use('/camion', camionRoutes);
app.use('/conduccion', conduccionRoutes);
app.use('/paquete', paqueteRoutes);
app.use('/provincia', provinciaRoutes);

// Iniciar servidor y sincronizar DB
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida correctamente.');

    // Sincroniza los modelos con la base de datos.
    // force: false (default) - No borra tablas si existen.
    // force: true - Borra y recrea tablas. ¡PELIGROSO en producción!
    // alter: true - Intenta modificar tablas existentes.
    await sequelize.sync({ force: false }); // Cambia bajo tu propio riesgo
    console.log('🔄 Modelos sincronizados con la base de datos.');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
  }
}

startServer();
