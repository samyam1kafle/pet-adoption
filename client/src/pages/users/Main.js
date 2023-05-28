import axios from 'axios';
import React,{useEffect} from 'react';
import sendRequest from '../../api/functions';
import Navbar from '../../components/Navbar';
import SearchForm from '../../components/SearchForm';
import SinglePet from '../../components/SinglePet';
import API_URL from '../../api';
import "../../css/main.css";

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      type: '',
      age: '',
      breed: '',
      breed1: '',
      sex: '',
      isCat: '',
      animals: []
    };
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if(e.target.value == "Cat"){
      this.setState({"isCat" : true})
  }else if(e.target.value == "Dog"){
      this.setState({"isCat" : false})
  }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { breed1, age, breed, sex, type } = this.state;
    let realBreed = type == "Cat" ? breed1 : breed;

    axios.get(`${API_URL}filter`, { params : { type, age, breed: realBreed , sex } })
    .then((e) => { 
      this.setState({"animals" : e.data.message});
      if(e.data.message.length == 0){
        alert("No animal Found!!")
      }  
    })
    .catch((e) => {});
  }

  render() {
    return (

      <div className="App">
        <Navbar/>
      <form onSubmit={this.handleSubmit} className='search-form'> 
        <SearchForm handleChange={this.handleChange} state={this.state}/>
      </form>
        <br/>
        <div className='featured-section'>

          <h1>Searched Pets</h1>
          <div className='featured-showcase'>
            {this.state.animals.map(e => {
                return <SinglePet id={e._id} name={e.name} age={e.age} sex={e.sex} contact={e.contact} breed={e.breed}  fill={true} animalId={e._id} is_adopted={e.is_adopted} petName={e.name} paragraph={e.description} ownerId={"6473af248390dc3cd75b3d6a"}/>
            })}
            {/* <SinglePet petName="Kuppy"/>
            <SinglePet petName="Duppy"/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
