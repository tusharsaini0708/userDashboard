import React from "react";
import Collapse from "./collapsible";

// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import FormGroup from "@material-ui/core/FormGroup";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

const Team = () => {
  const useStyles = makeStyles({
    text: {
      color: "#673AB7",
      fontSize: 16,
      textTransform: "none",
    },
    special: {
      width: "100%",
    },
  });

  const classes = useStyles();
  return (
    <div>
      <Link to="/" className="styleLink">
        <Button className={classes.text}>
          <i class="fas fa-arrow-left"></i>
          <span style={{ margin: "0 20px" }}>Management team</span>
        </Button>
      </Link>
      <i className="fas fa-pencil-alt fa-sm"></i>

      <div>
        <Button
          className={classes.text}
          style={{ borderBottom: "4px solid #673AB7" }}
        >
          Access Control
        </Button>
        |
        <Button className={classes.text} style={{ color: "black" }}>
          Assigned Members
        </Button>
        <Collapse />
      </div>
    </div>
  );
};

export default Team;
