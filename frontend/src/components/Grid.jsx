import React from "react";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";



const Table = styled.table`
  width: 100%;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Td = styled.td`
text-align: center;`;

export const Th = styled.th`
  text-align: center;
`;

const Grid = ({ users }) => {
  
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
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.name}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="30%">{item.cpf}</Td>
            <Td width="5%">
              <FaEdit/>
            </Td>
            <Td width="5%">
              <FaTrash />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid