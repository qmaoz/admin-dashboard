import { Box, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Sidebar({ sidebarWidth = 240, isSidebarOpen, closeSidebar }) {
  const location = useLocation();

  // Close temporary drawer on address change (back/forward browser history buttons, links)
  useEffect(() => {
    if (isSidebarOpen) {
      closeSidebar();
    }
  }, [location]);

  const drawer = (
    <List>
      <ListItemButton component={Link} to="/overview" onClick={closeSidebar}>
        <ListItemText primary="Overview" />
      </ListItemButton>
      <ListItemButton component={Link} to="/users" onClick={closeSidebar}>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton component={Link} to="/settings" onClick={closeSidebar}>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </List>
  );
  
  return (
    <>
      <Box component="nav" sx={{ width: { sm: sidebarWidth }, flexShrink: { sm: 0 } }}>
        {/* Mobile sidebar */}
        <Drawer
          variant="temporary"
          open={isSidebarOpen}
          onClose={closeSidebar}
          ModalProps={{ keepMounted: true}}
          sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { width: sidebarWidth } }}
        >
          {drawer}
        </Drawer>
        
        {/* Desktop sidebar */}
        <Drawer
          variant="permanent"
          open
          sx={{ display: { xs: "none", sm: "block" }, "& .MuiDrawer-paper": { width: sidebarWidth } }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
