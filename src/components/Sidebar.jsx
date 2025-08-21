import { Box, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar({ width = 240, mobileOpen, onClose }) {
  const drawer = (
    <List>
      <ListItemButton component={Link} to="/overview" onClick={onClose}>
        <ListItemText primary="Overview" />
      </ListItemButton>
      <ListItemButton component={Link} to="/users" onClick={onClose}>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton component={Link} to="/settings" onClick={onClose}>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </List>
  );
  
  return (
    <>
      <Box component="nav" sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { width } }}
        >
          {drawer}
        </Drawer>
        
        <Drawer
          variant="permanent"
          open
          sx={{ display: { xs: "none", sm: "block" }, "& .MuiDrawer-paper": { width } }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
