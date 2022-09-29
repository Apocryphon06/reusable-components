import {
  AddAlert,
  AssignmentTurnedIn,
  Bookmark,
  Description,
  InsertDriveFile,
  LocalAtmRounded,
  NoteAddOutlined,
  Settings,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 10px;
`;
const List = styled.ul`
  margin: 0;
  padding: 25px 30px;
  list-style: none;
  line-height: 3.5;
  font-weight: bold;
  font-size: 14px;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ListWrapper = styled.div`
  display: flex;
  height: max-height;
  width: fit-content;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  background-color: white;
`;

const ActionList = () => {
  return (
    <Container>
      <ListWrapper>
        <List>
          <ListItem>
            {" "}
            <Bookmark style={{ marginRight: "10px", opacity: "0.5" }} /> My Jobs
          </ListItem>
          <ListItem>
            <AddAlert style={{ marginRight: "10px", opacity: "0.5" }} /> Job
            alerts
          </ListItem>
          <ListItem>
            <LocalAtmRounded style={{ marginRight: "10px", opacity: "0.5" }} />{" "}
            Salary
          </ListItem>
          <ListItem>
            {" "}
            <AssignmentTurnedIn
              style={{ marginRight: "10px", opacity: "0.5" }}
            />{" "}
            Skill Assessments
          </ListItem>
          <ListItem>
            {" "}
            <Description style={{ marginRight: "10px", opacity: "0.5" }} />{" "}
            Interview prep
          </ListItem>
          <ListItem>
            {" "}
            <InsertDriveFile
              style={{ marginRight: "10px", opacity: "0.5" }}
            />{" "}
            Resume Builder jobs
          </ListItem>
          <ListItem>
            {" "}
            <YouTube style={{ marginRight: "10px", opacity: "0.5" }} /> Job
            seeker guidance
          </ListItem>
          <ListItem>
            {" "}
            <Settings style={{ marginRight: "10px", opacity: "0.5" }} />{" "}
            Application settings
          </ListItem>
        </List>
      </ListWrapper>
      <br />
    </Container>
  );
};

export default ActionList;
