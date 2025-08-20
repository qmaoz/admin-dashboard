import { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, Typography } from "@mui/material";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 0, name: "Serhii", email: "serhii@gmail.com", role: "Admin", age: 29 },
    { id: 1, name: "Oleg", email: "oleg@gmail.com", role: "Editor", age: 34 },
    { id: 2, name: "Anton", email: "anton@gmail.com", role: "Viewer", age: 25 },
    { id: 3, name: "Sofia", email: "sofia@gmail.com", role: "Viewer", age: 24 },
    { id: 4, name: "Maria", email: "maria@gmail.com", role: "Editor", age: 30 },
    { id: 5, name: "Olga", email: "olga@gmail.com", role: "Viewer", age: 28 },
    { id: 6, name: "Ivan", email: "ivan@gmail.com", role: "Admin", age: 32 },
    { id: 7, name: "Dmytro", email: "dmytro@gmail.com", role: "Editor", age: 27 },
    { id: 8, name: "Kateryna", email: "kateryna@gmail.com", role: "Viewer", age: 26 },
    { id: 9, name: "Andrii", email: "andrii@gmail.com", role: "Editor", age: 31 },
  ]);

  const [order, setOrder] = useState("asc");

  const handleSort = () => {
    const isAsc = order === "asc";
    
    const sorted = users.slice().sort((a, b) =>
      isAsc
        ? a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
        : b.name.localeCompare(a.name, undefined, { sensitivity: "base" })
    );

    setUsers(sorted);
    setOrder(isAsc ? "desc" : "asc");
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>
                <TableSortLabel active={true} direction={order} onClick={handleSort}>
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}