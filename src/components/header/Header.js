import React from 'react'
import './header.css'
import Logo from '../../images/logo.jpg';
import Sidebar from '../sidebar/Sidebar';

function Header({ color }) {
  return (
    <div className="header" style={{ background: color === 'black' ? 'black' : 'transparent' }}>
      <div className="logo">
        <img src={Logo} alt="spaceX" />
      </div>

      <div className="navs">


        <div className="nav-links">
          <p>falcon 9</p>
          <p>falcon heavy</p>
          <p>Dragon</p>
          <p>starship</p>
          <p>human spacelight</p>
          <p>ride share</p>
        </div>

        <div className="shop-hamburger">
          <p>shop</p>
          <p><Sidebar /></p>
        </div>
      </div>
    </div>
  )
}

export default Header
