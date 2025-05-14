import { Router } from 'express';
import camionRoutes from './camion.routes.js';
import camioneroRoutes from './camionero.routes.js';
import conduccionRoutes from './conduccion.routes.js';
import paqueteRoutes from './paquete.routes.js';
import provinciaRoutes from './provincia.routes.js';

const router = Router();

router.use('/camionero', camioneroRoutes);
router.use('/camion', camionRoutes);
router.use('/conduccion', conduccionRoutes);
router.use('/paquete', paqueteRoutes);
router.use('/provincia', provinciaRoutes);

export default router;
