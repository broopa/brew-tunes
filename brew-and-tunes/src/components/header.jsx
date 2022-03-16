import React from 'react';
import logo from '../images/brew-and-tunes-logo.png'

class Header extends React.Component {
    render() {
      return (
        <header className="columns " style={{alignItems: "center"}}>
            <div className="column level-item has-text-centered is-one-quarter-tablet is-full-mobile">
            <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="column" >
              <h1>Brew & Tunes</h1>
          </div>
        </header>
      );
    }
  }

export default Header;