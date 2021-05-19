import React from "react";
import "./sidebar.css";
const SideBar = () => {
  return (
    <div>
      <div className="list site">
        <i class="fas fa-gem isidebar"></i>
        MYSITE
      </div>
      <div className="list ">
        <i class="fas fa-th-large isidebar"></i>
        Projects
      </div>
      <div className="list ">
        <i class="fas fa-briefcase isidebar"></i>
        Organization Profile
      </div>
      <div className="list current">
        <i
          class="fas fa-shield-alt "
          style={{ marginLeft: 6, marginRight: 10 }}
        ></i>
        Access Control
      </div>
    </div>
  );
};

export default SideBar;
