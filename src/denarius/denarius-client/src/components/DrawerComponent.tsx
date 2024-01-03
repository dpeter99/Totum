import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  staysOpenOnClick?: boolean;
}
export const DrawerComponent = ({
  setOpenDrawer,
  staysOpenOnClick = false,
}: Props) => {
  return (
    <>
      <List>
        <ListItem onClick={() => setOpenDrawer(staysOpenOnClick)}>
          <ListItemText>
            <Link to="/">Home</Link>
          </ListItemText>
        </ListItem>
        {/*<ListItem onClick={() => setOpenDrawer(staysOpenOnClick)}>*/}
        {/*  <ListItemText>*/}
        {/*    <Link to="/about">About</Link>*/}
        {/*  </ListItemText>*/}
        {/*</ListItem>*/}
        {/*<ListItem onClick={() => setOpenDrawer(staysOpenOnClick)}>*/}
        {/*  <ListItemText>*/}
        {/*    <Link to="/contact">Contact</Link>*/}
        {/*  </ListItemText>*/}
        {/*</ListItem>*/}
        {/*<ListItem onClick={() => setOpenDrawer(staysOpenOnClick)}>*/}
        {/*  <ListItemText>*/}
        {/*    <Link to="/about">Faq</Link>*/}
        {/*  </ListItemText>*/}
        {/*</ListItem>*/}
      </List>
    </>
  );
};
