import { Button } from "@material-ui/core";
import {
  AccountCircle,
  Comment,
  Favorite,
  Send,
  Share,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 20px;
  backgrond-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  margin-bottom: 10px;
`;
const ImageContainer = styled.div`
  display: flex;
  margin-right: -10px;
  margin-left: -10px;
`;

const ActionDetails = styled.div`
  display: flex;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ActionText = styled.div`
  display: flex;
  font-size: 14px;
  color: #808080;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 20px;
`;

const AccountInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1em;
`;

const ProfileText = styled.div`
  display: flex;
  font-size: 14px;
`;

const Image = styled.img`
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`;

const Divider = styled.hr`
  background-color: #dfdfdf;
  height: 1px;
  border: 0;
`;

const ActionItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #dfdfdf;
  }
  cursor: pointer;
`;

const Feed = () => {
  return (
    <Container>
      <Wrapper>
        <ProfileWrapper>
          <AccountCircle style={{ width: "50px", height: "50px" }} />
          <AccountInformation>
            <ProfileText style={{ fontWeight: "bold" }}>
              Hrithik C . 3rd
            </ProfileText>
            <ProfileText style={{ color: "#808080" }}>
              Software Engineer. Capgemini Technologies ltd.
            </ProfileText>
            <ProfileText style={{ color: "#808080" }}>
              Posted 9h ago
            </ProfileText>
          </AccountInformation>
          <Button
            style={{
              textTransform: "none",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            + Follow
          </Button>
        </ProfileWrapper>
        <InfoContainer> What are you thoughts on this?</InfoContainer>
        <ImageContainer>
          <Image src="https://picsum.photos/500" />
        </ImageContainer>
        <ActionDetails></ActionDetails>
        <Divider />
        <Actions>
          <ActionItem>
            <Favorite style={{ width: "20px", height: "20px" }} />
            <ActionText>Like</ActionText>
          </ActionItem>

          <ActionItem>
            <Comment style={{ width: "20px", height: "20px" }} />
            <ActionText>Comment</ActionText>
          </ActionItem>
          <ActionItem>
            <Share style={{ width: "20px", height: "20px" }} />
            <ActionText>Share</ActionText>
          </ActionItem>
          <ActionItem>
            <Send style={{ width: "20px", height: "20px" }} />
            <ActionText>Send</ActionText>
          </ActionItem>
        </Actions>
      </Wrapper>
    </Container>
  );
};

export default Feed;
