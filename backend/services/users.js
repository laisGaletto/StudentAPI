import { db } from "../db.js";

export const getUsersService = (query) => {
  return new Promise((resolve, reject) => {
    let q = "SELECT * FROM users";

    const values = []

    if (query) {
      q += " WHERE name LIKE ? OR email LIKE ? OR cpf LIKE ?"
      values.push(`%${query}%`)
      values.push(`%${query}%`)
      values.push(`%${query}%`)
    }

    db.query(q, values, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data)
      }
    });
  })
}

export const addUsersService = (name, email, cpf) => {
  return new Promise((resolve, reject) => {
    const q = "INSERT INTO users (`name`, `email`, `cpf`) VALUES(?,?,?)"
    const values = [name, email, cpf]

    db.query(q, values, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data)
      }
    })
  })
}

export const deleteUserService = (id) => {
  return new Promise((resolve, reject) => {
    const q = "DELETE FROM users WHERE id=?";
    const userId = [id]

    db.query(q, [userId], (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data)
      }
    });
  })
}

export const updatedUserService = (id, name, email, cpf) => {
  return new Promise((resolve, reject) => {

    const q = "UPDATE users SET name=?, email=?, cpf=? WHERE id=?";
    const values = [name, email, cpf, id];
     
    console.log(values)

    db.query(q, values, (err, data) => {

      if (err) {
        reject(err);
      }  else {
        resolve(data)
      }
    });
  })
}