import React from 'react';
import logo from '../images/brew-and-tunes-logo.png'

class Header extends React.Component {
    render() {
      return (
        <header className="columns ">
            <div className="column level-item has-text-centered is-one-quarter-tablet is-full-mobile">
            <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="column">
              <h1>Brew and Tunes</h1>
              <p>Brew and Tunes is a side project to share my weekly playlist and coffee selection. Each week I rotate through albums that I have purchased, mostly through Bandcamp. I listen to albums front to back because listening to the same single over and over drives me insane; so this format of listing albums fits my normal routine. Coffee is a constant that is ever changing, for that last year I have been on an African kick, but that does change from time to time as I find new beans that pique my curiosity. 
              </p>
              <p>As I develop this project more I might expand information to include the hardware I am using for my coffee and my music listening.</p>
          </div>
        </header>
      );
    }
  }

export default Header;