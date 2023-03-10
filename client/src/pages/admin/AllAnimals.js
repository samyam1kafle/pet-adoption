import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AdminSinglePet from '../../components/AdminSinglePet';
import "../../css/adminallanimals.css";

class AllAnimals extends React.Component {
  render() {
    return (

      <div className="App">
        <AdminNavbar />
        <br />
        <div className='featured-section'>

          <div className='admin-animal-showcase'>
            <div className='row'>
              <AdminSinglePet />
              <AdminSinglePet />
              <AdminSinglePet />
              <AdminSinglePet />
            </div>
            <div className='row'>
              <AdminSinglePet />
              <AdminSinglePet />
              <AdminSinglePet />
              <AdminSinglePet />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllAnimals;
