import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const UpperPart = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      marginTop: 25,
      marginRight: "auto",
      marginLeft: "auto",
      width: "90%",
    },
  });

  const rows = [
    { department: "Management Team", access: "All Access", members: " 4" },
    {
      department: "Procurement Team",
      access: "Restricted Access",
      members: " 8",
    },
    { department: "Project Team", access: "Restricted Access", members: " 16" },
    { department: "IT Team", access: "Restricted Access", members: " 4" },
    { department: "Super Admin Team", access: "All Access", members: " 1" },
  ];

  const classes = useStyles();

  return (
    <div>
      <div
        style={{
          marginTop: 20,
          marginLeft: "auto",
          marginRight: "auto",
          width: "90%",
        }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "#673AB7", color: "white" }}
        >
          <i className="fas fa-plus" style={{ marginRight: 10 }}></i>
          Add Role
        </Button>
        <span style={{ marginLeft: 30 }}>
          <i className="fas fa-pencil-alt "></i>
        </span>
        <span style={{ marginLeft: 30 }}>
          <i className="far fa-trash-alt"></i>
        </span>
      </div>
      <TableContainer component={Paper} style={{ boxShadow: "none" }}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow
              style={{
                backgroundColor: "lightGrey",
              }}
            >
              <TableCell>Department/Role Name</TableCell>
              <TableCell align="center">Access Level</TableCell>
              <TableCell align="center">No Of members</TableCell>
              <TableCell align="center">Last Updated</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.department}>
                <TableCell component="th" scope="row">
                  <Link to="/team" className="styleLink">
                    {row.department}
                  </Link>
                  {/* <Link to="/team">{row.department}</Link> */}
                </TableCell>
                <TableCell align="center">
                  <span
                    className={`${
                      row.access === "All Access" ? "allGreen" : "allRed"
                    }`}
                  >
                    {row.access}
                  </span>
                </TableCell>
                <TableCell align="center">{row.members}</TableCell>
                <TableCell align="center">1 min ago</TableCell>
                <TableCell align="center">
                  <i className="far fa-eye"></i>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UpperPart;
