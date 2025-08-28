import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, IconButton, Box, useMediaQuery } from "@mui/material";

import Sidebar from './components/Sidebar';
import PageTitle from "./components/PageTitle";

import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

import MenuIcon from "@mui/icons-material/Menu";

function App() {
  // Theme (dark or light)
  const stored = localStorage.getItem("mui-mode");
  const initialMode = stored === "dark" || stored === "light" ? stored : "light";
  const [themeMode, setThemeMode] = useState(initialMode);

  const handleThemeModeToggle = (isDark) => setThemeMode(isDark ? "dark" : "light");

  useEffect(() => {
    localStorage.setItem("mui-mode", themeMode);
  }, [themeMode]);

  const theme = useMemo(
    () => createTheme({ palette: { mode: themeMode } }),
    [themeMode]
  );

  // Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const sidebarWidth = 240;

  // Close sidebar when screen is larger than sm
  const isViewportAtLeastSm = useMediaQuery(theme.breakpoints.up("sm"));
  
  useEffect(() => {
    if (isViewportAtLeastSm && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [isViewportAtLeastSm, isSidebarOpen]);  

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Box sx={{ display: "flex" }}>
            <AppBar position="fixed" sx={{ display: { sm: "none" } }}>
              <Toolbar>
                <IconButton color="inherit" edge="start" onClick={openSidebar}>
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Sidebar sidebarWidth={sidebarWidth} isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
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
                      darkMode={themeMode === "dark"}
                      onToggleDarkMode={handleThemeModeToggle}
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
