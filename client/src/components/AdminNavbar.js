import React from 'react';
import "../css/navbar.css";

class AdminNavbar extends React.Component {
  render() {
    return (
        <div className='navbar'>

          <div className='logo nav-item'>
            <img src='' alt='PetMe' />
          </div>
          <nav className='nav-item'>
         

            <ul>
              <li><a href='/allanimals'>All Animals</a></li>
              <li><a href='/userrequest'>User Request</a></li>
              <li><a href='/usermessage'>User Messages</a></li>
              <li><a href='/historypage'>History</a></li>
            </ul>
          </nav>
        </div>


    );
  }
}

export default AdminNavbar;
