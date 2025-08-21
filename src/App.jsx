import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, IconButton, Box } from "@mui/material";

import Sidebar from './components/Sidebar';
import PageTitle from "./components/PageTitle";

import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const stored = localStorage.getItem("mui-mode");
  const initialMode = stored === "dark" || stored === "light" ? stored : "light";
  const [mode, setMode] = useState(initialMode);

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const sidebarWidth = 240;

  useEffect(() => {
    localStorage.setItem("mui-mode", mode);
  }, [mode]);

  const theme = useMemo(
    () => createTheme({ palette: { mode } }),
    [mode]
  );

  const handleToggleDark = (isDark) => setMode(isDark ? "dark" : "light");

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Box sx={{ display: "flex" }}>
            <AppBar position="fixed" sx={{ display: { sm: "none" } }}>
              <Toolbar>
                <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Sidebar width={sidebarWidth} mobileOpen={mobileOpen} onClose={handleDrawerToggle} />
            <Box
              sx={{
                maxWidth: "100vw",
                overflowX: "hidden",
                flexGrow: 1,
                p: {xs: 3, sm: 3},
                mt: { xs: 7, sm: 0 },
              }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="/overview" replace />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings"
                  element={
                    <Settings
                      darkMode={mode === "dark"}
                      onToggleDarkMode={handleToggleDark}
                    />
                  }
                />
                <Route path="*" element={<PageTitle>Not Found</PageTitle>} />
              </Routes>
            </Box>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;
