import { Camionero } from '../models/index.js';

// Obtener todos los camioneros
export const getCamioneros = async (req, res) => {
  try {
    const camioneros = await Camionero.findAll();
    res.json(camioneros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los camioneros' });
  }
};

// Obtener un camionero por CUIL
export const getCamioneroByCuil = async (req, res) => {
  const { cuil } = req.params;
  try {
    const camionero = await Camionero.findByPk(cuil);
    if (!camionero) {
      return res.status(404).json({ error: 'Camionero no encontrado' });
    }
    res.json(camionero);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el camionero' });
  }
};

// Crear un nuevo camionero
export const createCamionero = async (req, res) => {
  try {
    const nuevoCamionero = await Camionero.create(req.body);
    res.status(201).json(nuevoCamionero);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el camionero' });
  }
};

// Actualizar un camionero existente
export const updateCamionero = async (req, res) => {
  const { cuil } = req.params;
  try {
    const camionero = await Camionero.findByPk(cuil);
    if (!camionero) {
      return res.status(404).json({ error: 'Camionero no encontrado' });
    }
    await camionero.update(req.body);
    res.json(camionero);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el camionero' });
  }
};

// Eliminar un camionero
export const deleteCamionero = async (req, res) => {
  const { cuil } = req.params;
  try {
    const camionero = await Camionero.findByPk(cuil);
    if (!camionero) {
      return res.status(404).json({ error: 'Camionero no encontrado' });
    }
    await camionero.destroy();
    res.json({ mensaje: 'Camionero eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el camionero' });
  }
};
