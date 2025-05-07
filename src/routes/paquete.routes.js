// src/routes/paquete.routes.js
import express from 'express';
import {
  obtenerPaquetes,
  crearPaquete,
  actualizarPaquete,
  eliminarPaquete,
} from '../controllers/paquete.controller.js';

const router = express.Router();

router.get('/', obtenerPaquetes);
router.post('/', crearPaquete);
router.put('/:id', actualizarPaquete);
router.delete('/:id', eliminarPaquete);

export default router;
