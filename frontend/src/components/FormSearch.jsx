import React, { useState } from "react";
import {config} from "../config"
import { toast } from "react-toastify";
import styled from "styled-components";
import axios from "axios";

const SearchContainer = styled.form`
  display: flex;
  flex-direction: row;
  margin: 0 10px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 200px;
  padding: 0 10px;
  border: none;
  border-radius: 10px 0 0 10px;
  height:40px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 0;
  background-color: #00e88f;
  border: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ButtonClear = styled.button`
  padding: 10px;
  border-radius: 0 10px 10px 0;
  background-color: #07c079;
  border: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const FormSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.get(config.API_HOST + "/users", {
          params: { query: searchQuery}
        });
      
      onSearch(res.data);
      
    } catch (error) {
      toast.error("Erro ao realizar a busca.");
      console.error(error.message);
    }
  };

  const handleClear = async () => {
    setSearchQuery("");
    try {
      const res = await axios.get(config.API_HOST + "/users");
      onSearch(res.data);
    } catch (error) {
      toast.error("Erro ao limpar a busca.");
      console.error(error.message);
    }
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <InputArea>
      <Input
        type="text"
        placeholder="Pesquisar..."
        value={searchQuery}
        onChange={handleChange}
        />
      </InputArea>
      
      <Button type="submit">Buscar</Button>
      <ButtonClear type="button" onClick={handleClear}>Limpar</ButtonClear>
    </SearchContainer>
  );
};

export default FormSearch;