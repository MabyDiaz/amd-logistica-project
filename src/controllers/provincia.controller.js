// src/controllers/provincia.controller.js
import Provincia from '../models/Provincia.js';

export const obtenerProvincias = async (req, res) => {
  try {
    const provincias = await Provincia.findAll();
    res.json(provincias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las provincias' });
  }
};

export const crearProvincia = async (req, res) => {
  try {
    const nueva = await Provincia.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la provincia' });
  }
};

export const actualizarProvincia = async (req, res) => {
  try {
    const { id } = req.params;
    const [actualizado] = await Provincia.update(req.body, { where: { id } });
    if (actualizado === 0)
      return res.status(404).json({ error: 'No encontrada' });
    res.json({ mensaje: 'Provincia actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la provincia' });
  }
};

export const eliminarProvincia = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Provincia.destroy({ where: { id } });
    if (eliminado === 0)
      return res.status(404).json({ error: 'No encontrada' });
    res.json({ mensaje: 'Provincia eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la provincia' });
  }
};
