import { userSchema } from "../models/index.js";

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userSchema.findByIdAndDelete(id);
    res.status(201).json({
      message: 'usuario eliminado',
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error al eliminar usuario',
    });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userSchema.findByIdAndUpdate(id, req.body);
    res.status(201).json({
      message: 'Usuario actualizado',
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error al actualizar usuario',
    });
  }
};

export const createUser = async (req, res) => {
  const { body } = req;

  try {
    const user = await userSchema.create(body);
    res.status(201).json({
      msg: 'Usuario creado',
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear usuario',
    });
  }
};
