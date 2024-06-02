import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { Form } from "./components/Form";
import Grid from "./components/Grid";
import FormSearch from "./components/FormSearch";
import { config } from "./config";
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
  const [editingUser, setEditingUser] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get(config.API_HOST + "/users");
      setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error)
    }
  };

  useEffect(() => {
    getUsers();
    // com array vazio useEffect executa apenas uma vez 
  }, []);

  const handleAddUser = (newUser) => {
    // setUsers((prevUsers) => [...prevUsers, newUser]);
    getUsers()
  };

  const handleSearch = (searchResults) => {
    setUsers(searchResults);
  };

  const handleDeleteUser = (deletedUserId) => {
    setUsers(users.filter((user) => user.id !== deletedUserId));
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };
  
  return (
    <>
      <Container>
        <Title>ALUNOS</Title>
        <FormSearch onSearch={handleSearch} />
        <Form onAddUser={handleAddUser} onUpdateUser={handleUpdateUser} editingUser={editingUser}/>
        <Grid users={users}  onDeleteUser={handleDeleteUser} onEditUser={handleEditUser}/>
      </Container>
      <GlobalStyle/>
    </>
  );
}

export default App;
