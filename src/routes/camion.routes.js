import { Router } from 'express';
import {
  getCamiones,
  getCamionByPatente,
  createCamion,
  updateCamion,
  deleteCamion,
} from '../controllers/camion.controller.js';

const router = Router();

router.get('/', getCamiones);
router.get('/:patente', getCamionByPatente);
router.post('/', createCamion);
router.put('/:patente', updateCamion);
router.delete('/:patente', deleteCamion);

export default router;
