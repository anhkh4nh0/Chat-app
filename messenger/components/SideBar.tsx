import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import MoreVerticalIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const StyledContainer = styled.div`
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  /* background: white; */
  color: #fff;
  border-right: 1px solid whitesmoke;
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  /* color: #fff; */
`;

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 2px;
`;

const StyledUserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const StyledSearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
`;

const StyledSidebarButton = styled(Button)`
  width: 100%;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`;

const SideBar = () => {
  const logOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log('ERROR LOGGIN OUT',error)
    }
  }
  return (
    <>
      <StyledContainer>
        <StyledHeader>
          <Tooltip title="User E mail">
            <StyledUserAvatar />
          </Tooltip>
          <div>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVerticalIcon />
            </IconButton>
            <IconButton onClick={logOut}>
              <LogoutIcon />
            </IconButton>
          </div>
        </StyledHeader>
        <StyledSearch>
          <SearchIcon />
          <StyledSearchInput placeholder="Search  "/>
        </StyledSearch>
        <StyledSidebarButton>
          Start a new Conversation
        </StyledSidebarButton>
      </StyledContainer>
    </>
  );
};

export default SideBar;
