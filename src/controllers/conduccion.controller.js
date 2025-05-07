import Conduccion from '../models/Conduccion.js';

export const obtenerConducciones = async (req, res) => {
  try {
    const conducciones = await Conduccion.findAll();
    res.json(conducciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las conducciones' });
  }
};

export const crearConduccion = async (req, res) => {
  try {
    const nueva = await Conduccion.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la conducción' });
  }
};

export const actualizarConduccion = async (req, res) => {
  try {
    const { id } = req.params;
    const [filasActualizadas] = await Conduccion.update(req.body, {
      where: { id },
    });

    if (filasActualizadas === 0) {
      return res.status(404).json({ error: 'Conducción no encontrada' });
    }

    res.json({ mensaje: 'Conducción actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la conducción' });
  }
};

export const eliminarConduccion = async (req, res) => {
  try {
    const { id } = req.params;
    const filasEliminadas = await Conduccion.destroy({
      where: { id },
    });

    if (filasEliminadas === 0) {
      return res.status(404).json({ error: 'Conducción no encontrada' });
    }

    res.json({ mensaje: 'Conducción eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la conducción' });
  }
};
