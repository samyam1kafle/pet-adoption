import React from 'react';
import Navbar from '../../components/Navbar';
import "../../css/register.css";
import sendRequest from '../../api/functions';


class Register extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            pet: '',
            name: '',
            age: '',
            breed: '',
            sex: '',
            type: '',
            neutered : '',
            location_from: '',
            keep_duration: '',
            pet_photo: '',
            breed1: '',
            pet_name: '',
            isCat: false
        };
      }

      handleChange = (e) => {
          this.setState({ [e.target.name]: e.target.value });
          console.log(this.state.isCat, e.target.name, e.target.value)
          if(e.target.value == "Cat"){
              this.setState({"isCat" : true})
            }else if(e.target.value == "Dog"){
                this.setState({"isCat" : false})
            }
        
      }
      componentDidMount(){
        let button1 = document.querySelector(".nav-toggle > button:nth-child(1)")
        let button2 = document.querySelector(".nav-toggle > button:nth-child(2)")
        button1.classList.remove("selected-button")
        button2.classList.add("selected-button")
    }
      handleSubmit = (e) => {
        e.preventDefault();
        const { pet, name, age, breed, sex, type, neutered , location_from, breed1,keep_duration, pet_photo, pet_name, contact, description } = this.state;
        sendRequest("animals/add", "POST", { pet, name, age, breed : breed || breed1, sex, type, "is_neutered": neutered == "yes", location_from, keep_duration, pet_photo, pet_name, contact, image: '',description, "withhold_date": "2023-06-28", "own_pet" : true, pet_owner_id:"640c27cee594ae42cf3b5c4a" }, (e) => {alert("Registered Successfully!!")})
      }
      
    render() {
        const {  breed1, neutered ,location_from,keep_duration,pet_photo,pet_name, pet, name, age, breed, sex, type, contact, description } = this.state;
        return (

            <div className="App">
                <Navbar />
                <br />
                <div className='register-form'>
                    <center>
                        <h1>Find animal a loving home :)</h1>
                        <h1 className='question-note'>Please go through the question properly</h1>
                    </center>
                    <form method='POST' onSubmit={this.handleSubmit}>
                        <div className='form-item'>
                            <label>You want to rehome/register?</label>
                            <select  value={type} onChange={this.handleChange} name='type' >
                                <option value={"Dog"}>Dog</option>
                                <option value={"Cat"}>Cat</option>
                            </select>
                        </div>
                        <br />
                        <div className='form-item'>
                            <label>Pet Name</label>
                            <input type={"text"} placeholder={"type here..."} value={name} onChange={this.handleChange} name='name'/> 
                        </div>
                        <br />
                        <div className='form-item'>
                            <label>Description</label>
                            <textarea value={description} onChange={this.handleChange} name='description'></textarea>
                        </div>
                        <br />
                        <br />
                        <div className='form-item'>
                            <label>Contact Number</label>
                            <input type={"text"} placeholder={"type here..."} value={contact} onChange={this.handleChange} name='contact'/> 
                        </div>
                        <br />
                        {
                        this.state.isCat || 
                        <>
                        <div className='form-item'>
                            <label>Dog Breed</label>
                            <select value={breed} onChange={this.handleChange} name='breed'>
                                <option>Tibetan Mastiff</option>
                                <option>Nepali Sheepdog (Bhote Kukur)</option>
                                <option>Labrador Retriever</option>
                                <option>German Shepherd</option>
                                <option>Siberian Husky</option>
                                <option>Golden Retriever</option>
                                <option>Pomeranian</option>
                                <option>Boxer</option>
                                <option>Rottweiler</option>
                                <option>Shih Tzu</option>
                            </select>
                            
                        </div>
                        <br />  
                        </>
                         }
                         {
                        this.state.isCat &&
                        <>
                        <div className='form-item'>
                            <label>Cat Breed</label>

                        <select value={breed1} onChange={this.handleChange} name='breed1'>
                                <option>Persian</option>
                                <option>Siamese</option>
                                <option>Maine Coon</option>
                                <option>British Shorthair</option>
                                <option>Ragdoll</option>
                                <option>Bengal</option>
                                <option>Scottish Fold</option>
                                <option>Russian Blue</option>
                                <option>Himalayan</option>
                                <option>Sphynx</option>
                            </select>
                            </div>
                            <br />  
                            </>
                        }
                        <div className='form-item'>
                            <label>Age</label>
                            <select value={age} onChange={this.handleChange} name='age'>
                                <option value='1'>Puppy</option>
                                <option value='2'>Young</option>
                                <option value='3'>Old</option>
                            </select>
                        </div>
                        <br />  
                        <div className='form-item'>
                            <label>Is the pet neutered ?</label>
                            <select value={neutered } onChange={this.handleChange} name='neutered '>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <br />
                       
                        <div className='form-item'>
                            <label>Where did you get this pet?</label>
                            <input type={"text"} placeholder={"type here..."} value={location_from} onChange={this.handleChange} name='location_from'/> 
                        </div>
                        <br />
                        <div className='form-item'>
                            <label>How long are you able to keep your pet while we help you find a suitable new home?</label>
                            <select value={keep_duration} onChange={this.handleChange} name='keep_duration'>
                                <option>Less then 1 week</option>
                                <option>Less then 2 week</option>
                                <option>Less then 3 week</option>
                                <option>Not more then 2 days</option>
                            </select>
                        </div>


                        <br />
                        <div className='form-item'>
                            <label>Upload Photo</label>
                            <input value={pet_photo} onChange={this.handleChange} name='pet_photo' type="file" />
                            <button onClick={(e) => {
                                e.preventDefault()
                                document.querySelector("input[type='file']").click()
                            }}>Upload</button>
                        </div>

                        <br />
                        <div className='form-item'>
                            <label>Gender</label>
                            <select value={pet_name} onChange={this.handleChange} name='sex'>
                                <option value={"M"}>Male</option>
                                <option value={"F"}>Female</option>
                                <option value={"O"}>Other</option>
                            </select>
                        </div>
                        <br />
                        <div className='form-item'>
                            <label>&nbsp;</label>
                            <input type="submit" value="register" />
                            <br/>
                        </div>
                    </form>

                </div>
                         {/* <p style={{color: 'red', display : "block", margin : "100px 200px"}}>Animal Register Successfully</p> */}
            </div>
        );
    }
}

export default Register;
