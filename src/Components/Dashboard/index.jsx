import React, { useState } from 'react'
import "./style.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//components
import Users from '../../Page/Users';

//images
import userIcon from "../../assets/Images/user.svg";
import report from "../../assets/Images/reports.svg";
import analytics from "../../assets/Images/analytics.svg"
import muneIcon from "../../assets/Images/menuIcon.svg"

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0)


  return (
    <div className={`dashboard-container ${isCollapsed ? 'collapsed' : ''}`}>
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <p className='cLogo'>{isCollapsed ? "C" : "Company"} </p>
        <nav className='sideMenuItemList'>
          <div onClick={() => setActiveMenu(0)} className="sideMenuItem">
            <img src={userIcon} alt="" />
            <p style={{ display: isCollapsed ? "none" : "block" }}>Users</p>
          </div>
          <div onClick={() => setActiveMenu(1)} className="sideMenuItem">
            <img src={report} alt="" />
            <p style={{ display: isCollapsed ? "none" : "block" }}>Reports</p>
          </div>
          <div onClick={() => setActiveMenu(2)} className="sideMenuItem">
            <img src={analytics} alt="" />
            <p style={{ display: isCollapsed ? "none" : "block" }}>Analytics</p>
          </div>
        </nav>
      </aside>
      <main className="main-content">
        <div className="mainSectionNavBar">
          <img src={muneIcon} className='haumIcon' alt="" onClick={() => setIsCollapsed(!isCollapsed)} />
        </div>
        <Users activeMenu={activeMenu} />

      </main>
    </div>
  )
}
