import express from 'express';
import {
  obtenerConducciones,
  crearConduccion,
  actualizarConduccion,
  eliminarConduccion,
} from '../controllers/conduccion.controller.js';

const router = express.Router();

router.get('/', obtenerConducciones);
router.post('/', crearConduccion);
router.put('/:id', actualizarConduccion);
router.delete('/:id', eliminarConduccion);

export default router;
