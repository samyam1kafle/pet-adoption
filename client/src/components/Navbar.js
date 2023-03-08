import React from 'react';
import "../css/navbar.css";

class Navbar extends React.Component {
  render() {
    return (
        <div className='navbar'>

          <div className='logo nav-item'>
            <img src='' alt='logo' />
          </div>
          <nav className='nav-item'>
            <div className='nav-toggle'>
              <button className='selected-button'>Adopt</button>
              <button>Register</button>
            </div>

            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Animal</a></li>
              <li><a href='#'>Pet care & Health</a></li>
              <li><a href='#'>Pet near me</a></li>
              <li><a href='#'>How to do</a></li>
              <li><a href='#'>Sign in</a></li>
              <li><a href='#'>Message us</a></li>
            </ul>
          </nav>
        </div>


    );
  }
}

export default Navbar;
