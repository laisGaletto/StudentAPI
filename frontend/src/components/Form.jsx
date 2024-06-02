import React, {useEffect, useRef} from "react"
import styled from "styled-components"
import axios from "axios";
import { toast } from "react-toastify";


const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  backgorund-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;


const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height:40px;
`;

const Button = styled.button`
  passing: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  backgorund-color: #000;
  color: white;
  height: 42px;
`;

const Label = styled.label` `;

export const Form = ({ onAddUser , onUpdateUser , editingUser }) => {
  const formRef = useRef()

  useEffect(() => {
    if (editingUser) {
      formRef.current.name.value = editingUser.name;
      formRef.current.email.value = editingUser.email;
      formRef.current.cpf.value = editingUser.cpf;
    } else {
      formRef.current.reset();
    }
  }, [editingUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      cpf: formData.get("cpf")
    };
  

    try {
      if (editingUser) {
        userData.id = editingUser.id;
        await axios.put(`http://localhost:3001/users/${editingUser.id}`, userData);
        toast.success("Usuário atualizado com sucesso!");
        onUpdateUser(userData);
      } else {
        await axios.post("http://localhost:3001/users", userData);
        toast.success("Usuário adicionado com sucesso!");
        onAddUser(userData)
      }
      formRef.current.reset();
    } catch (error) {
      toast.error(editingUser ? "Erro ao atualizar usuário." : "Erro ao adicionar usuário.");
      console.error(error.message);
    }
  };

  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit} >
      <InputArea>
        <Label>Nome</Label>
        <Input name="name"/>
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" />
      </InputArea>
      <InputArea>
        <Label>CPF</Label>
        <Input name="cpf"/>
      </InputArea>
      
      <Button type="submit">{editingUser ? "ATUALIZAR" : "SALVAR"}</Button>
    </FormContainer>
  )
}



