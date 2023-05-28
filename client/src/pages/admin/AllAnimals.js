import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AdminSinglePet from '../../components/AdminSinglePet';
import "../../css/adminallanimals.css";
import sendRequest from '../../api/functions';

class AllAnimals extends React.Component {


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
    return (

      <div className="App">
        <AdminNavbar />
        <br />
        <div className='featured-section'>

          <div className='admin-animal-showcase'>
            <div className='row'>
            {this.state.animals.map(e => {
                return <AdminSinglePet id={e._id} name={e.name} age={e.age} sex={e.sex} contact={e.contact} breed={e.breed} owner={e.pet_owner_id} paragraph={e.description} />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllAnimals;
