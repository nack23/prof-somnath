import React, { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="navbar">

      <div className="nav-container">

        {/* LEFT EMPTY (for balance) */}
        <div className="nav-left"></div>

        {/* CENTER MENU ICON (MOBILE) */}
        <div 
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </div>

        {/* RIGHT LINKS (DESKTOP) */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
          <a href="#research" onClick={()=>setMenuOpen(false)}>Research</a>
          <a href="#publications" onClick={()=>setMenuOpen(false)}>Publications</a>
          <a href="#team" onClick={()=>setMenuOpen(false)}>Group</a>
          <a href="#teaching" onClick={()=>setMenuOpen(false)}>Teaching</a>
          <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;