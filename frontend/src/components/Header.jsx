import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  color: #000;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color:#00e88f4d;
  @media (max-width: 600px) {
    font-size: 12px
  }
`;

const Title = styled.h1``

const Header = () => {
  return (
    <HeaderContainer>
    <Title>Welcome to the Student API</Title>
    </HeaderContainer>
  );
};

export default Header;