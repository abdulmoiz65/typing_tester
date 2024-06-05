import React from 'react';
// import logo2 from '../logo/logo2.png';
import './components.css';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <header>
        <div className="logo">
          <Link to={"/"} className='link'>
          {/* <img src={} alt="Logo" className="img" /> */}
          <span className="text">Typing Master</span>
          </Link>
        </div>
      </header> 
    </nav>
  );
};

export default Header;
