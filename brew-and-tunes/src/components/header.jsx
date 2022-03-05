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
          <p>Brew and Tunes is a side project to share my weekly playlist and coffee selection. Music plays a large role in my life and is generally always playing. Coffee has become a new hobby of mine, I love experimenting with brewing methods and beans, even though I've been on a big African kick for the last year.</p>
          <p>In the future I might expand this to include the audio equipment that I am using as well. Right now I will focus on the albums I have recently purchased and am listening to. I tend to listen to albums front to back. I am not a person who enjoys just picking up a single and replaying it ad nasium.</p>
          </div>
        </header>
      );
    }
  }

export default Header;