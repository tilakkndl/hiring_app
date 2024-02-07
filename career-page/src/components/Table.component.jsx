import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "role", label: "Role", minWidth: 100 },
  {
    id: "noOfQuestions",
    label: "No of questions",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "scoredMarks",
    label: "Scored Marks",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

// const rows = [
//   createData("India", "IN", "frontend", 1324171354, 3287263),
//   createData("China", "CN", "frontend", 1403500365, 9596961),
//   createData("Italy", "IT", "frontend", 60483973, 301340),
//   createData("United States", "US", "frontend", 327167434, 9833520),
//   createData("Canada", "CA", "frontend", 37602103, 9984670),
//   createData("Australia", "AU", "backend", 25475400, 7692024),
//   createData("Germany", "DE", "backend", 83019200, 357578),
//   createData("Ireland", "IE", "backend", 4857000, 70273),
//   createData("Mexico", "MX", "backend", 126577691, 1972550),
//   createData("Japan", "JP", "backend", 126317000, 377973),
//   createData("France", "FR", "backend", 67022000, 640679),
//   createData("United Kingdom", "GB", "backend", 67545757, 242495),
//   createData("Russia", "RU", "backend", 146793744, 17098246),
//   createData("Nigeria", "NG", "backend", 200962417, 923768),
//   createData("Brazil", "BR", "backend", 210147125, 8515767),
// ];

export default function TableImplement({ data }) {
  function createData(name, email, role, noOfQuestions, scoredMarks) {
    return { name, email, role, noOfQuestions, scoredMarks };
  }

  console.log(data);
  let rows = data.data.map((data) =>
    // `createData(${data.name}, ${data.email}, ${data.role}, ${data.noOfQuestions}, ${data.scoredMarks})`
    ({
      name: data.name,
      email: data.email,
      role: data.role,
      noOfQuestions: data.noOfQuestions,
      scoredMarks: data.scoredMarks,
    })
  );
  // rows = JSON.parse(rows);
  console.log("rows", rows);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "80%", overflow: "hidden", margin: "auto" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
