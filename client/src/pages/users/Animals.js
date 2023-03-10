import React from 'react';
import Navbar from '../../components/Navbar';
import SinglePet from '../../components/SinglePet';
import "../../css/animals.css";

class Animals extends React.Component {
  render() {
    return (

      <div className="App">
        <Navbar />
        <br />
        <div className='featured-section'>
          <div className='heading-text-container'>
            <h1>See favorite pets list </h1>
            <h1>heart</h1>
            
          </div>

          <div className='animal-showcase'>
            <div className='row'>
              <SinglePet />
              <SinglePet />
              <SinglePet />
              <SinglePet />
            </div>
            <div className='row'>
              <SinglePet />
              <SinglePet />
              <SinglePet />
              <SinglePet />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Animals;
