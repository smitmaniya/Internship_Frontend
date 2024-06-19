import React from 'react';
import "D:/internship-project/src/css/serviceProvider/drawer.css";
import logo from "D:/internship-project/src/assets/logoapp.png";

export default function Drawer({ setActiveTab, tiles, title }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        {tiles.map((tile, index) => (
          <button key={index} className="link-button" onClick={() => setActiveTab(tile.name)}>
            <i className={`fa ${tile.icon}`}></i> {tile.name}
          </button>
        ))}
      </div>
      <hr className="divider" />
      <div className="bottom-tiles">
        <button className="link-button" onClick={() => setActiveTab('Settings')}>
          <i className="fas fa-cog"></i> Settings
        </button>
        <button className="link-button" onClick={() => setActiveTab('Logout')}>
          <i className="fas fa-sign-out-alt"></i> Log Out
        </button>
      </div>
    </div>
  );
}
