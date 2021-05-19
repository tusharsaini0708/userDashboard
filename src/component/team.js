import React from "react";
import Collapse from "./collapsible";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

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
      <Link to="/userDashboard" className="styleLink">
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
