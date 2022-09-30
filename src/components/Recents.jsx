import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 10px;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 400px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  background-color: #ffffff;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Clear = styled.button`
  display: flex;
  font-weight: bold;
  font-size: 14px;
  justify-content: center;
  background-color: transparent;
  padding: 4px;
  border: none;
  color: #808080;
  border-radius: 5px;
  &:hover {
    background-color: #dfdfdf;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: bold;
`;
const InfoItem = styled.li`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #808080;
  font-weight: bold;
`;

const ItemWrapper = styled.div`
  padding: 5px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #dfdfdf;
  }
`;

const Divider = styled.hr`
  background-color: #dfdfdf;
  height: 1px;
  border: 0;
`;

const Recents = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          Recent job searches &nbsp;&nbsp;&nbsp;&nbsp;
          <Clear
            onClick={() => {
              alert("Are you sure?");
            }}
          >
            Clear
          </Clear>
        </Heading>
        <List>
          <ItemWrapper>
            <ListItem>
              react developer jobs.&nbsp;&nbsp;{" "}
              <span style={{ color: "green", fontSize: "12px" }}>63 new</span>{" "}
            </ListItem>
            <InfoItem>Alert On. India. Entry level. Remote</InfoItem>
          </ItemWrapper>
          <Divider />
          <ItemWrapper>
            <ListItem>
              react developer jobs.&nbsp;&nbsp;{" "}
              <span style={{ color: "green", fontSize: "12px" }}>129 new</span>{" "}
            </ListItem>
            <InfoItem>Alert On. India. Entry level. Remote</InfoItem>
          </ItemWrapper>
          <Divider />
        </List>
      </Wrapper>
    </Container>
  );
};

export default Recents;
