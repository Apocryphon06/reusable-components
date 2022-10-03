import { LinkedIn, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 5px;
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  justify-content: ;
  align-items: center;
`;

const Brand = styled.div`
  display: flex;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1 px solid black;
  background-color: #dfdfdf;
  padding: 5px;
  border-radius: 5px;
  width: 250px;
`;

const SearchInput = styled.input`
  margin-left: 5px;
  border: none;
  background-color: transparent;
  width: 200px;
  font-size: 14px;
  padding: 4px;
`;

const Navbar = () => {
  return (
    <Container>
      <Brand>
        <LinkedIn style={{ width: "50px", height: "50px" }} />
      </Brand>
      <SearchContainer>
        <Search /> <SearchInput placeholder="Search" />
      </SearchContainer>
    </Container>
  );
};

export default Navbar;
