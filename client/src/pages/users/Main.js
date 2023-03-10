import React from 'react';
import Navbar from '../../components/Navbar';
import SearchForm from '../../components/SearchForm';
import SinglePet from '../../components/SinglePet';
import "../../css/main.css";

class Main extends React.Component {
  render() {
    return (

      <div className="App">
        <Navbar/>
        <SearchForm />
        <br/>
        <div className='featured-section'>

          <h1>Featured Pets</h1>
          <div className='featured-showcase'>
            <SinglePet />
            <SinglePet />
            <SinglePet />
            <SinglePet />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
