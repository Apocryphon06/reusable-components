import { Badge, Typography } from "@material-ui/core";
import {
  AccountCircle,
  Apps,
  Home,
  LinkedIn,
  Message,
  NotificationsActive,
  People,
  Search,
  Work,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 5px;
  padding-left: 100px;
  display: flex;
  flex-direction: row;
  justify-content: ;
  align-items: center;
  background-color: white;
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
  margin-right: 200px;
`;

const SearchInput = styled.input`
  margin-left: 5px;
  border: none;
  background-color: transparent;
  width: 200px;
  font-size: 14px;
  padding: 4px;
`;

const NavbarItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
`;

const ItemWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.2em;
  margin-right: 20px;
  cursor: pointer;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 12px;
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
      <NavbarItems>
        <ItemWrapper>
          <Home style={{ width: "25px", height: "25px" }} />
          <ItemText>Home</ItemText>
        </ItemWrapper>
        <ItemWrapper>
          <People style={{ width: "25px", height: "25px" }} />
          <ItemText>My Network</ItemText>
        </ItemWrapper>
        <ItemWrapper>
          <Work style={{ width: "25px", height: "25px" }} />
          <ItemText>Jobs</ItemText>
        </ItemWrapper>
        <ItemWrapper>
          <Badge badgeContent={100} color="secondary">
            <Message style={{ width: "25px", height: "25px" }} />
          </Badge>

          <ItemText>Message</ItemText>
        </ItemWrapper>
        <ItemWrapper>
          <Badge badgeContent={6} color="primary">
            <NotificationsActive style={{ width: "25px", height: "25px" }} />
          </Badge>
          <ItemText>Notifications</ItemText>
        </ItemWrapper>
        <ItemWrapper>
          <AccountCircle style={{ width: "25px", height: "25px" }} />
          <ItemText>Me</ItemText>
        </ItemWrapper>
        <ItemWrapper>
          <Apps style={{ width: "25px", height: "25px" }} />
          <ItemText>Work</ItemText>
        </ItemWrapper>
        <ItemWrapper>
          <Typography
            style={{
              fontSize: "12px",
              color: "#EAC117",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Get hired faster,<br></br> Try Premium <br></br> Free.
          </Typography>
        </ItemWrapper>
      </NavbarItems>
    </Container>
  );
};

export default Navbar;
