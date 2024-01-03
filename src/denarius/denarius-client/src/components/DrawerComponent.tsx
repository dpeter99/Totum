import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewListIcon from "@mui/icons-material/ViewList";
import { DrawerButton } from "./DrawerButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

interface Props {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  staysOpenOnClick?: boolean;
}
export const DrawerComponent = ({
  setOpenDrawer,
  staysOpenOnClick = false,
}: Props) => {
  const onClick = () => setOpenDrawer(staysOpenOnClick);
  return (
    <>
      <List>
        <DrawerButton
          icon={<DashboardIcon />}
          label="Dashboard"
          to="/"
          onClick={onClick}
        />

        <DrawerButton
          icon={<ViewListIcon />}
          label="List Transactions"
          to="/list-transactions"
          onClick={onClick}
        />

        <DrawerButton
          icon={<PlaylistAddIcon />}
          label="New Transaction"
          to="/add-transaction"
          onClick={onClick}
        />
      </List>
    </>
  );
};
