# StudentAPI

O projeto consiste em desenvolver uma API utilizando Node.js que consome um banco de dados de alunos e uma interface de usuário (UI) em React para realizar consultas e operações CRUD (Create, Read, Update, Delete) no banco de dados. 
O banco de dados conterá as informações de alunos como: id, name, email e cpf.

## Funcionalidades

- Criar um novo usuário
- Listar todos os usuários
- Atualizar informações de um usuário
- Obter detalhes de um usuário específico 
- Limpar consulta de usuário
- Deletar um usuário


## Tecnologias Utilizadas

### Backend

- Node.js
- Express
- Cors
- Nodemon
- MySQL

### Frontend

- React
- React Router
- React-icons
- React-toastify
- Styled-components
- Axios 


## Instalação

1. Clone este repositório: `git clone https://github.com/laisGaletto/studentAPI.git`
2. Acesse o diretório do projeto: `cd studentAPI`
3. Instale as dependências do backend: `cd backend`e `npm install`
4. Instale as dependências do frontend: `cd ../frontend`e `npm install`
5. Inicie o frontend:`npm start`
6. Em uma nova janela ou aba do terminal, acesse a pasta do backend e inicie-o: `cd ../backend` e `npm start`


## Configuração do Banco de Dados

### MySQL

1. Certifique-se de ter o MySQL instalado em sua máquina. 
Você pode baixá-lo e instalá-lo a partir do [site oficial do MySQL](https://dev.mysql.com/downloads/).

2. Após a instalação, abra um terminal ou prompt de comando e inicie o serviço do MySQL.

3. Em seguida, execute os seguintes comandos SQL para criar o banco de dados e a tabela necessários:

```sql
CREATE DATABASE app_challenge;

USE app_challenge;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	cpf VARCHAR(14) NOT NULL,
	PRIMARY KEY (id)
);
```

4. Agora, você pode configurar as informações de conexão com o banco de dados no arquivo db.js no diretório backend do projeto. Certifique-se de fornecer as credenciais corretas para o usuário, senha e nome do banco de dados.

```sql
Create app user:
CREATE USER 'admin_app'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON app_challenge.* TO 'admin_app'@'localhost';
FLUSH PRIVILEGES;
```

Para visualizar o fluxo completo [acesse aqui!](https://excalidraw.com/#json=Az6VFYrrH4cSLa1y3wyHM,Efc-49yBYVLDkAEi8yPq6Q)
![Fluxograma](fluxograma.png)

## ROADMAP 

	- Criar paginação
 	- Testes para validação de input
