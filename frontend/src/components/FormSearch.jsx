import React, { useState } from "react";
import {config} from "../config"
import { toast } from "react-toastify";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.form``;

const Input = styled.input``;

const Button = styled.button``;

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
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Pesquisar..."
        value={searchQuery}
        onChange={handleChange}
      />
      <Button type="submit">Buscar</Button>
      <Button type="button" onClick={handleClear}>Limpar</Button>
    </FormContainer>
  );
};

export default FormSearch;