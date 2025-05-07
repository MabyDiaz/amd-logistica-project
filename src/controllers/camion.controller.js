import { Camion } from '../models/index.js';

// Obtener todos los camiones
export const getCamiones = async (req, res) => {
  try {
    const camiones = await Camion.findAll();
    res.json(camiones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los camiones' });
  }
};

// Obtener un camión por patente
export const getCamionByPatente = async (req, res) => {
  const { patente } = req.params;
  try {
    const camion = await Camion.findByPk(patente);
    if (!camion) {
      return res.status(404).json({ error: 'Camión no encontrado' });
    }
    res.json(camion);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el camión' });
  }
};

// Crear un nuevo camión
export const createCamion = async (req, res) => {
  try {
    const nuevoCamion = await Camion.create(req.body);
    res.status(201).json(nuevoCamion);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el camión' });
  }
};

// Actualizar un camión existente
export const updateCamion = async (req, res) => {
  const { patente } = req.params;
  try {
    const camion = await Camion.findByPk(patente);
    if (!camion) {
      return res.status(404).json({ error: 'Camión no encontrado' });
    }
    await camion.update(req.body);
    res.json(camion);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el camión' });
  }
};

// Eliminar un camión
export const deleteCamion = async (req, res) => {
  const { patente } = req.params;
  try {
    const camion = await Camion.findByPk(patente);
    if (!camion) {
      return res.status(404).json({ error: 'Camión no encontrado' });
    }
    await camion.destroy();
    res.json({ mensaje: 'Camión eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el camión' });
  }
};