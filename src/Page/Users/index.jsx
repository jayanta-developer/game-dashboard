import React from 'react';
import "./style.css"

export default function Users({ activeMenu }) {
  return (
    <>
      <div style={{ display: activeMenu === 0 ? "block" : "none" }} className="pageSectionBox">
        <h2>User</h2>
      </div>
    </>
  )
}
