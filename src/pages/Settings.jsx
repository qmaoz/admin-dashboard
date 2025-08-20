import { useState } from "react";
import { Switch, Checkbox, FormControlLabel, TextField, Button, Typography, Paper } from "@mui/material";

export default function Settings({ darkMode, onToggleDarkMode }) {
  const [notifications, setNotifications] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      darkMode,
      notifications,
      username,
    });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Paper sx={{ p: 3, maxWidth: 500 }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "400px" }}>
        {/* Theme switcher */}
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={(e) => onToggleDarkMode(e.target.checked)} />}
          label="Dark Mode"
        />

        {/* Checkbox */}
        <FormControlLabel
          control={<Checkbox checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />}
          label="Receive notifications"
        />

        {/* Text input */}
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Button type="submit" variant="contained">Save Settings</Button>
      </form>
      </Paper>
    </>
  );
}
