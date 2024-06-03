import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { Form } from "./components/Form";
import Grid from "./components/Grid";
import FormSearch from "./components/FormSearch";
import { config } from "./config";
import { useState , useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify"
import Header from "./components/Header";



const Container = styled.div`
  width: 100vw;
  margin: 20px auto;
  display: flex;
  max-width: 850px;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 850px;
  margin: 20px auto;
  padding: 20px;
  align-items: flex-end;

  @media (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
    margin: auto 20px ;
  }
`;

const Title = styled.h2` 
@media (max-width: 600px) {
  justify-content: center;
  flex-direction: column;
  margin: auto;
}
`;

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
      <Header />
      <Container2>
      <Title>Gerenciamento de alunos</Title> 
        <FormSearch onSearch={handleSearch} />
      </Container2>
      <Container>
        <Form onAddUser={handleAddUser} onUpdateUser={handleUpdateUser} editingUser={editingUser}/>
        <Grid users={users}  onDeleteUser={handleDeleteUser} onEditUser={handleEditUser}/>
      </Container>
      <GlobalStyle/>
    </>
  );
}

export default App;
