import {
  AccountCircle,
  CalendarToday,
  Image,
  NoteAdd,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  displa: flex;
  flex-direction: column;
  padding: 20px;
  width: 400px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StartPost = styled.button`
  background-color: transparent;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: #808080;
  width: 100%;
  text-align: left;
`;

const MediaAttachments = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const InfoItem = styled.div`
  font-size: 14px;
  padding: 5px;
  font-weight: bold;
  color: #808080;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover{
    background-color: #dfdfdf;
  }
`;

const Post = () => {
  return (
    <Container>
      <Wrapper>
        <AccountCircle
          style={{
            width: "40px",
            height: "40px",
            opacity: "0.5",
            paddingRight: "10px",
          }}
        />
        <StartPost>Start a post</StartPost>
      </Wrapper>  
      <MediaAttachments>
        <InfoItem>
          <Image style={{ color: "skyblue", paddingRight: "10px" }} /> Photo
        </InfoItem>
        <InfoItem>
          <YouTube style={{ color: "green", paddingRight: "10px" }} /> Video
        </InfoItem>
        <InfoItem>
          <CalendarToday style={{ color: "orange", paddingRight: "10px" }} />{" "}
          Event
        </InfoItem>
        <InfoItem>
          <NoteAdd style={{ color: "purple", paddingRight: "10px" }} /> Write
          article
        </InfoItem>
      </MediaAttachments>
    </Container>
  );
};

export default Post;
