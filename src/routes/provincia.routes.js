// src/routes/provincia.routes.js
import express from 'express';
import {
  obtenerProvincias,
  crearProvincia,
  actualizarProvincia,
  eliminarProvincia,
} from '../controllers/provincia.controller.js';

const router = express.Router();

router.get('/', obtenerProvincias);
router.post('/', crearProvincia);
router.put('/:id', actualizarProvincia);
router.delete('/:id', eliminarProvincia);

export default router;
