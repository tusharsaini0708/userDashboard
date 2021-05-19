import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UpperPart from "./upperPart";
import LowerPart from "./lowerPart";
import Team from "./team";
import "./style.css";

const MainContainer = () => {
  return (
    <div className="d-block" style={{ width: "100%" }}>
      <Router>
        <UpperPart />
        <hr />
        <Route path="/userDashboard" exact component={LowerPart} />
        <Route path="/team" exact component={Team} />
      </Router>
    </div>
  );
};

export default MainContainer;
