import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css"; // Importing CSS file

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : "expanded"}`} style={{ backgroundColor: "#2C2F33" }}>
      <div className="top">
        <img
          className="menu-icon icon"
          src={assets.menu_icon}
          alt="Menu"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
        {!isCollapsed && (
          <div className="new-chat">
            <img className="icon" src={assets.plus_icon} alt="New Chat" />
            <p>New Chat</p>
          </div>
        )}
        {!isCollapsed && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img className="icon" src={assets.message_icon} alt="Message" />
              <p>What is React...</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img className="icon" src={assets.question_icon} alt="Help" />
          {!isCollapsed && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img className="icon" src={assets.history_icon} alt="Activity" />
          {!isCollapsed && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img className="icon" src={assets.setting_icon} alt="Settings" />
          {!isCollapsed && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
