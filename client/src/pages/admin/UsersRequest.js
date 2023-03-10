import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import SingleUserRequest from '../../components/SingleUserRequest';
import "../../css/userrequest.css";

class UserRequest extends React.Component {
  render() {
    return (

      <div className="App">
        <AdminNavbar />
        <br />
        <div className='featured-user-section'>

          <div className='admin-all-user-request'>
            <SingleUserRequest />
            <SingleUserRequest />
            <SingleUserRequest />
          </div>
        </div>
      </div>
    );
  }
}

export default UserRequest;
