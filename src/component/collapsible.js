import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import IOSSwitch from "./iosSwitch";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    // backgroundColor: "rgba(0, 0, 0, .03)",
    // borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 50,
    "&$expanded": {
      minHeight: 50,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function CustomizedAccordions() {
  let [rows, setRow] = useState([
    {
      department: "Budget",
      access: "All Access",
      summery: "View|Create|Edit|Delete",
      switchBTn: true,
      open: false,
    },
    {
      department: "Bidding",
      access: "No Access",
      summery: "-",
      switchBTn: false,
      open: false,
    },
    {
      department: "Vendor Portal",
      access: "Restricted Access",
      summery: "View|Create",
      switchBTn: true,
      open: false,
    },
    {
      department: "Purchase Order/Work Order",
      access: "Restricted Access",
      summery: "View|Create",
      switchBTn: true,
      open: false,
    },
    {
      department: "Organisational Profile",
      access: "All Access",
      summery: "View|Create|Edit|Delete",
      switchBTn: true,
      open: false,
    },
    {
      department: "Permission & Access Control",
      access: "No Access",
      summery: "-",
      switchBTn: false,
      open: false,
    },
  ]);

  const handleChange = (index) => {
    let temp = [...rows];
    if (temp[index].open) temp[index].open = false;
    else temp[index].open = true;
    setRow(temp);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      // color: theme.palette.text.secondary,
    },
  }));

  const getClassName = (some) => {
    if (some === "All Access") return "allAccess";
    else if (some === "No Access") return "noAccess";
    else return "resAccess";
  };

  const classes = useStyles();

  return (
    <div style={{ width: "90%", marginLeft: 30 }}>
      <Accordion square style={{ backgroundColor: "lightGrey", marginTop: 20 }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className={classes.root}>
            <Grid container spacing={2}>
              <Grid style={{ padding: 0 }} item xs={4}>
                <div
                  className={classes.paper}
                  style={{ textAlign: "left", marginLeft: 25 }}
                >
                  Departant/Role Name
                </div>
              </Grid>
              <Grid style={{ padding: 0 }} item xs={2}>
                <div className={classes.paper} style={{ margin: "0 auto" }}>
                  Access Level
                </div>
              </Grid>
              <Grid style={{ padding: 0 }} item xs={3}>
                <div className={classes.paper}>Summary</div>
              </Grid>
              <Grid style={{ padding: 0 }} item xs={2}>
                <div className={classes.paper}>Last Updated</div>
              </Grid>

              <Grid item xs={1} style={{ padding: 0 }}></Grid>
            </Grid>
          </Typography>
        </AccordionSummary>
      </Accordion>
      {rows.map((row, index) => (
        <Accordion
          square
          expanded={row.open}
          onChange={() => handleChange(index)}
        >
          <AccordionSummary>
            <Typography className={classes.root}>
              <Grid container spacing={2}>
                <Grid style={{ padding: 0 }} item xs={4}>
                  <div className={classes.paper} style={{ textAlign: "left" }}>
                    <i
                      className={`fas fa-${row.open ? "minus" : "plus"}-circle`}
                      style={{ marginRight: 10 }}
                    ></i>
                    {row.department}
                  </div>
                </Grid>
                <Grid style={{ padding: 0 }} item xs={2}>
                  <div
                    className={`classes.paper ${getClassName(row.access)}`}
                    style={{ margin: "8px auto" }}
                  >
                    {row.access}
                  </div>
                </Grid>
                <Grid style={{ padding: 0 }} item xs={3}>
                  <div className={classes.paper}>{row.summery}</div>
                </Grid>
                <Grid style={{ padding: 0 }} item xs={2}>
                  <div className={classes.paper}>1 min ago</div>
                </Grid>

                <Grid item xs={1} style={{ padding: 0 }}>
                  <div style={{ padding: 0 }} className={classes.paper}>
                    <FormControlLabel
                      control={<IOSSwitch checked={row.switchBTn} />}
                    />
                  </div>
                </Grid>
              </Grid>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="hiddenBox">
              <div className="radioBtns">
                <h3>Access Control</h3>
                <RadioGroup aria-label="gender" name="gender1">
                  <FormControlLabel
                    style={{ height: 40 }}
                    value="All Access"
                    control={<Radio />}
                    label="All Access"
                  />
                  <span className="secondLable">can access all items</span>
                  <FormControlLabel
                    style={{ height: 40 }}
                    value="Restricted"
                    control={<Radio />}
                    label="Restricted Access"
                  />
                  <span className="secondLable">
                    can access only assigned or created items
                  </span>
                </RadioGroup>
              </div>
              <div className="checkboxBtns">
                <FormGroup>
                  <h3>Permissions</h3>
                  <FormControlLabel
                    style={{ height: 30 }}
                    control={<Checkbox />}
                    label="View items in access"
                  />
                  <FormControlLabel
                    style={{ height: 30 }}
                    control={<Checkbox />}
                    label="Edit items in access"
                  />
                  <FormControlLabel
                    style={{ height: 30 }}
                    control={<Checkbox />}
                    label="Create items in access"
                  />
                  <FormControlLabel
                    style={{ height: 30 }}
                    control={<Checkbox />}
                    label="Delete items in access"
                  />
                </FormGroup>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default CustomizedAccordions;
