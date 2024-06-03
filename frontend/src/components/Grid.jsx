import React from "react";
import styled from "styled-components";
import { config } from "../config";
import { FaTrash, FaEdit } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";


const Table = styled.table`
  width: 100%;
  background: #fff;
  padding: 30px; /* Aumentando o padding */
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 20px;
  max-width: 900px;
  margin: 20px auto;
  word-break: break-all;
  border-collapse: collapse; /* Adicionando colapso de borda para evitar espaços entre células */
  border-top-left-radius: 20px; /* Arredondando a borda superior esquerda */
  border-top-right-radius: 20px; /* Arredondando a borda superior direita */
`;

export const Thead = styled.thead`
  background-color: #17af75d4;
  color: #000;
  border-radius: 20px;
`;

export const Tbody = styled.tbody`
  border-radius: 20px;
`;

export const Tr = styled.tr`
&:nth-child(even) {
  background-color: #f2f2f2; 
}`;

export const Td = styled.td`
  text-align: center;
  padding: 20px; /* Aumentando o padding */
`;

export const Th = styled.th`
  text-align: center;
  padding: 20px; /* Aumentando o padding */
`;


const Grid = ({ users , onDeleteUser, onEditUser }) => {
  
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(config.API_HOST + `/users/${userId}`);
      onDeleteUser(userId);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>CPF</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user, i) => (
          <Tr key={i}>
            <Td width="30%">{user.name}</Td>
            <Td width="30%">{user.email}</Td>
            <Td width="30%">{user.cpf}</Td>
            <Td width="5%">
              <FaEdit onClick={() => onEditUser(user)}/>
            </Td>
            <Td width="5%">
              <FaTrash onClick={() => handleDeleteUser(user.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid