import { db } from "../db.js";

export const getUsersController = (_, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    
    return res.status(200).json(data)
  })
}

export const addUsersController = (req, res) => {

  const q = "INSERT INTO users (`name`, `email`, `cpf`) VALUES(?,?,?)"

  const values = [
    req.body.name,
    req.body.email,
    req.body.cpf,
  ]

  db.query(q, values, (err) => { 
    if (err) return res.json(err);

    //adicionado status 201 após inserção do user
    return res.status(201).json("Usuário cadastrado com sucesso")
    
  })
}

export const deleteUserController = (req, res) => {
  const userId = req.params.id;

  const q = "DELETE FROM users WHERE id=?";

  db.query(q, [userId], (err, result) => {
    if (err) {
      console.error("Erro ao excluir usuário:", err.message);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }

    return res.status(200).json({ message: "Usuário deletado com sucesso" });
  });
};

export const updateUserController = (req, res) => {
  const userId = req.params.id;
  const { name, email, cpf } = req.body;

  if (!userId || !name || !email || !cpf) {
    console.log("Campos obrigatórios faltando:", { userId, name, email, cpf });
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  console.log("Atualizando usuário:", { userId, name, email, cpf });

  const q = "UPDATE users SET name=?, email=?, cpf=? WHERE id=?";

  db.query(q, [name, email, cpf, userId], (err, result) => {
    if (err) {
      console.error("Erro ao atualizar usuário:", err.mesage);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }

    if (result.affectedRows === 0) {
      console.error("Nenhum usuário encontrado com o ID especificado");
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    console.log("Usuário atualizado com sucesso:", result);
    return res.status(200).json({ message: "Usuário atualizado com sucesso" })
  });
};