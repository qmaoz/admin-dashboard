import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

import Sidebar from './components/Sidebar';
import PageTitle from "./components/PageTitle";

import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Settings from "./pages/Settings";


function App() {
  const stored = localStorage.getItem("mui-mode");
  const initialMode = stored === "dark" || stored === "light" ? stored : "light";
  const [mode, setMode] = useState(initialMode);

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
            <Sidebar />
            <Box sx={{ flexGrow: 1, padding: "20px" }}>
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