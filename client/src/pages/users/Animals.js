import React from 'react';
import Navbar from '../../components/Navbar';
import SinglePet from '../../components/SinglePet';
import "../../css/animals.css";
import sendRequest from '../../api/functions';

class Animals extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      animals: []
    };
  }
  componentDidMount() {
    sendRequest("animals", "GET", undefined, (e) => {
      this.setState({ animals: e.data.data })
    })


  }
  
  render() {
    const ownerId = "test123"
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
              {this.state.animals.map(e => {
                // return <SinglePet petName={e.name} paragraph={e.description} ownerId={e.pet_owner_id}/>
                console.log(e)
                return <SinglePet is_adopted={false} ownerId={e.pet_owner_id} petName={e.name} animalId={e._id} paragraph={e.description} allowRequest={true}/>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Animals;
