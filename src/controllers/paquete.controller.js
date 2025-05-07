// src/controllers/paquete.controller.js
import Paquete from '../models/Paquete.js';

export const obtenerPaquetes = async (req, res) => {
  try {
    const paquetes = await Paquete.findAll();
    res.json(paquetes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los paquetes' });
  }
};

export const crearPaquete = async (req, res) => {
  try {
    const nuevo = await Paquete.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el paquete' });
  }
};

export const actualizarPaquete = async (req, res) => {
  try {
    const { id } = req.params;
    const [actualizado] = await Paquete.update(req.body, { where: { id } });
    if (actualizado === 0)
      return res.status(404).json({ error: 'No encontrado' });
    res.json({ mensaje: 'Paquete actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el paquete' });
  }
};

export const eliminarPaquete = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Paquete.destroy({ where: { id } });
    if (eliminado === 0)
      return res.status(404).json({ error: 'No encontrado' });
    res.json({ mensaje: 'Paquete eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el paquete' });
  }
};
