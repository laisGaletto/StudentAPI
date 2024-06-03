import { db } from "../db.js";
import { addUsersService, deleteUserService, getUsersService, updatedUserService } from "../services/users.js";

export const getUsersController = async (req, res) => {
  const { query } = req.query;
  try {
    const users = await getUsersService(query);
    console.log(users)
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error ao buscar usuários",
    })
  }
};

export const addUsersController = async (req, res) => {
  try {
    const newUsers = await addUsersService(req.body.name, req.body.email, req.body.cpf);
    console.log(newUsers)
    return res.status(201).json(newUsers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Erro ao adicionar novo usuário",
    })
 }
};

export const deleteUserController = async (req, res) => {
  try {
    const deleteUser = await deleteUserService(req.params.id);
    console.log(deleteUser)
    return res.status(200).json({message: "Usuário deletado com sucesso" })
  } catch (error){
    console.error(error);
    return res.status(500).json({
      message: "Erro ao excluir novo usuário",
    })
  }
};

export const updateUserController = async (req, res) => {
  try {
    const updateUser = await updatedUserService(req.params.id , req.body.name, req.body.email, req.body.cpf)
    console.log(updateUser)
    return res.status(200).json({ message: "Usuário atualizado com sucesso" })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Erro ao atualizar usuário",
    })
  }
}