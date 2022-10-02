import { Info } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 10px;
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  background-color: #ffffff;
  flex-direction: column;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: bold;
  padding-right: 150px;
  padding-left: 15px;
`;

const ListWrapper = styled.div`
  margin-top: 10px;
  font-size: 12px;
  &:hover {
    background-color: #dfdfdf;
  }
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const ListItem = styled.div`
  line-height: 0.3em;
`;

const News = () => {
  return (
    <Container>
      <Wrapper>
        <Head>
          <HeaderText>LinkedIn News</HeaderText>
          <Info />
        </Head>
        <ListWrapper>
          <ul>
            <ListItem>
              <li style={{ fontWeight: "bold" }}>
                Enim quis laborum amet ullamco officia tempor.
              </li>
              <p>Top News. 32,712 readers.</p>
            </ListItem>
          </ul>
        </ListWrapper>
      </Wrapper>
    </Container>
  );
};

export default News;
