import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
  }
  
  body{
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;

    @media (max-width: 600px) {
      display: flex;
    }
  }
`;

export default Global
