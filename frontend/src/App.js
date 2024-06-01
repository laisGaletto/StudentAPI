import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { Form } from "./components/Form";
import Grid from "./components/Grid";
import { useState , useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify"



const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2` `;

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/users");
      setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getUsers();
    // com array vazio useEffect executa apenas uma vez 
    }, [])

  return (
    <>
      <Container>
        <Title>ALUNOS</Title>
        <Form />
        <Grid users={users}/>
      </Container>
      <GlobalStyle/>
    </>
  );
}

export default App;
