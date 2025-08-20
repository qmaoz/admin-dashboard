import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const drawerWidth = 240;
  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" }
        }}
      >
        <List>
          <ListItemButton component={Link} to="/overview">
            <ListItemText primary="Overview" />
          </ListItemButton>
          <ListItemButton component={Link} to="/users">
            <ListItemText primary="Users" />
          </ListItemButton>
          <ListItemButton component={Link} to="/settings">
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
