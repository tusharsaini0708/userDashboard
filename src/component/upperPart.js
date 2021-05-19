import React from "react";

const UpperPart = () => {
  return (
    <div>
      <div className="userInfo">
        <i className="fas fa-user-circle" style={{ marginRight: 5 }}></i>
        <span style={{ marginRight: 25 }}>Kishore</span>
        <i className="far fa-bell" style={{ marginRight: 10 }}></i>
        <i className="far fa-question-circle" style={{ marginRight: 10 }}></i>
      </div>
      <div>
        <div className="sync">
          <span
            style={{
              color: "#673AB7",
              borderBottom: "4px solid #673Ab7",
              marginRight: 30,
            }}
          >
            <i
              className="fas fa-rss"
              style={{ color: "#673AB7", marginRight: 10 }}
            ></i>
            Permissions
          </span>
          <span>
            <i
              className="fas fa-grip-horizontal"
              style={{ marginRight: 10 }}
            ></i>
            Apporoval Matrix
          </span>
          <span style={{ fontSize: 13, position: "relative", left: 650 }}>
            <i className="fas fa-sync-alt" style={{ marginRight: 5 }}></i>
            Last synced 15 min ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpperPart;
