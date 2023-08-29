import React, { useState } from 'react';
import './style.css'

function Sidebar() {
  const [theme, setTheme] = useState('dark');
  const [active, setActive] = useState(true);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setActive(true);
  };

  return (
    <div className={`sidebar ${theme}`}>
      <div className="sidebar-top">
        <span className="logo">Admin Hub</span>
      </div>
      <div className="sidebar-center">
        <ul className="list">
          <li className={`list-item ${active ? 'active' : ''}`}>
            <i className="list-item-icon fas fa-home"></i>
            <span className="list-item-text">Dashboard</span>
          </li>
          <li className="list-item">
                <i className="list-item-icon fas fa-search"></i>
                <span className="list-item-text">Search</span>
                  </li>
                  <li className="list-item">
                <i className="list-item-icon fas fa-toolbox"></i>
                <span className="list-item-text">Tools</span>
            </li>
            <li className="list-item">
                <i className="list-item-icon fas fa-shopping-basket"></i>
                <span className="list-item-text">Market</span>
            </li>
            <li className="list-item">
                <i className="list-item-icon far fa-question-circle"></i>
                <span className="list-item-text">Resources</span>
            </li>
            <li className="list-item">
                <i className="list-item-icon fas fa-book"></i>
                <span className="list-item-text">Docs</span>
            </li>
            <li className="list-item">
                <i className="list-item-icon fas fa-users"></i>
                <span className="list-item-text">Community</span>
                  </li> 
                   
              </ul>
            
      </div>
      <div className="sidebar-bottom">
        <div className="color-box dark" onClick={() => handleThemeChange('dark')}></div>
        <div className="color-box night" onClick={() => handleThemeChange('night')}></div>
        <div className="color-box light" onClick={() => handleThemeChange('light')}></div>
          </div>
           <button className='button'>Logout</button>
    </div>
  );
}

export default Sidebar;


