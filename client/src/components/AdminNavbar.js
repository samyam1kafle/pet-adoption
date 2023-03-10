import React from 'react';
import "../css/navbar.css";

class AdminNavbar extends React.Component {
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
              <li><a href='#'>All Animals</a></li>
              <li><a href='#'>User Request</a></li>
              <li><a href='#'>User Messages</a></li>
              <li><a href='#'>History</a></li>
            </ul>
          </nav>
        </div>


    );
  }
}

export default AdminNavbar;
