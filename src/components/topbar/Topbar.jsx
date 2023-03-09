import React from "react";
import "./topbar.css";
import { NotificationsNone,  Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">KOOGLE PEEP</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">10</span>
          </div>

          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://firebasestorage.googleapis.com/v0/b/pictures-27ace.appspot.com/o/keshi2.jpg?alt=media&token=a1e60916-b8f4-47e8-aa42-377e46705f5d" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
