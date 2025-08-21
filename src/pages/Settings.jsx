import { useState } from "react";
import { Switch, Checkbox, FormControlLabel, TextField, Button, Paper } from "@mui/material";
import PageTitle from "../components/PageTitle";

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
      <PageTitle>Settings</PageTitle>

      <Paper
        sx={{
          p: 3,
          maxWidth: 448,
          transition: "0.3s",
          boxShadow: 3,
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "400px" }}>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={(e) => onToggleDarkMode(e.target.checked)} />}
          label="Dark Mode"
        />

        <FormControlLabel
          control={<Checkbox checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />}
          label="Receive notifications"
        />

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
