import Menu from "@mui/material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerComponent } from "./DrawerComponent";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <Typography variant="h6">
              <Link to="/">DENARIUS</Link>
            </Typography>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
              <DrawerComponent setOpenDrawer={setOpenDrawer}></DrawerComponent>
            </Drawer>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
