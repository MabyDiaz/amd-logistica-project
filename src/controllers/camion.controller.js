import { Camion } from '../models/index.js';

// Obtener todos los camiones
export const getCamiones = async (req, res) => {
  try {
    const camiones = await Camion.findAll();
    res.status(200).json(camiones);
  } catch (error) {
    console.error('Error al obtener camiones:', error);
    res
      .status(500)
      .json({ message: 'Error interno del servidor', error: error.message });
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
    res.status(200).json(camion);
  } catch (error) {
    console.error('Error al obtener camion por patente:', error);
    res
      .status(500)
      .json({ message: 'Error interno del servidor', error: error.message });
  }
};

// Crear un nuevo camión
export const createCamion = async (req, res) => {
  try {
    // req.body contiene los datos enviados en el cuerpo de la solicitud HTTP (generalmente en formato JSON).
    // Cliente.create(data): Método de Sequelize para crear un nuevo registro.
    // 'data' es un objeto con los campos y valores del nuevo cliente.
    // Devuelve una promesa que resuelve con la instancia recién creada.
    const nuevoCamion = await Camion.create(req.body);
    res.status(201).json(nuevoCamion);
  } catch (error) {
    console.error('Error al crear cliente:', error);
    // Manejo de errores específicos de Sequelize (ej. validaciones)
    if (
      error.name === 'SequelizeValidationError' ||
      error.name === 'SequelizeUniqueConstraintError'
    ) {
      return res
        .status(400)
        .json({
          message: 'Error de validación',
          errors: error.errors.map((e) => e.message),
        });
    }
    res
      .status(500)
      .json({ message: 'Error interno del servidor', error: error.message });
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
