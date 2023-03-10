import React from 'react';
import Navbar from '../../components/Navbar';
import SinglePet from '../../components/SinglePet';
import "../../css/nearme.css";

class PetNearMe extends React.Component {
  render() {
    return (

      <div className="App">
        <Navbar/>
        <br/>
        <div className='featured-section'>

          <h1>Searching pets near you...</h1>
          <div className='pet-searching-output'>
            <SinglePet />
            <SinglePet />

          </div>
        </div>
      </div>
    );
  }
}

export default PetNearMe;
