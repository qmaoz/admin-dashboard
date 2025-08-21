import { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel } from "@mui/material";
import PageTitle from "../components/PageTitle";

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

  const [order, setOrder] = useState(null); // null | "asc" | "desc"

  const handleSort = () => {
    if (order === null) {
      setUsers(
        users.slice().sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
        )
      );
      setOrder("asc");
    } else if (order === "asc") {
      setUsers(
        users.slice().sort((a, b) =>
          b.name.localeCompare(a.name, undefined, { sensitivity: "base" })
        )
      );
      setOrder("desc");
    } else {
      setUsers(users.slice().sort((a, b) => a.id - b.id));
      setOrder(null);
    }
  };

  return (
    <>
      <PageTitle>Users</PageTitle>

      <TableContainer
        component={Paper}
        sx={{
          maxWidth: "100%",
          overflowX: "auto",
          transition: "0.3s",
          boxShadow: 2,
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        <Table>
          <TableHead
            sx={{
              "& th:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell onClick={handleSort} sx={{ cursor: "pointer" }}>
                <TableSortLabel active={order !== null} direction={order ?? "asc"}>
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
