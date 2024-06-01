import React, {useRef} from "react"
import styled from "styled-components"

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

export const Form = ({ onEdit }) => {
  const ref = useRef()

  return (
    <FormContainer ref={ref}>
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
      
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  )
}

