import React from 'react';
import Navbar from '../../components/Navbar';
import "../../css/register.css";

class Register extends React.Component {
    submit(e){
        e.preventDefault()
        console.log("Hello World")
    }
  render() {
    return (

      <div className="App">
        <Navbar/>
        <br/>
        <div className='register-form'>
            <center>
                <h1>Find animal a loving home :)</h1>
                <h1 className='question-note'>Please go through the question properly</h1>
            </center>
            <form onSubmit={this.submit}>
                <div className='form-item'>
                    <label>You want to rehome/register?</label>
                    <select name='pet'>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Hemster</option>
                    </select>
                </div>
                <br/>
                <div className='form-item'>
                    <label>Is the pet neutered?</label>
                    <select name='neutered'>
                        <option  value="yes">Yes</option>
                        <option  value="no">No</option>
                    </select>
                </div>
                <br/>
                <div className='form-item'>
                    <label>Where did you get this pet?</label>
                    <select>
                        <option>It was my pet</option>
                    </select>
                </div>
                <br/>
                <div className='form-item'>
                    <label>How long are you able to keep your pet while we help you find a suitable new home?</label>
                    <select>
                        <option>Less then 1 week</option>
                    </select>
                </div>
                <br/>
                <br/>
                <div className='form-item'>
                    <label>Upload Photo</label>
                    <input type="file" />
                    <button onClick={(e) => {
                        e.preventDefault()
                        document.querySelector("input[type='file']").click()
                    }}>Upload</button>
                </div>
                
                <br/>
                <div className='form-item'>
                    <label>Gender</label>
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <br/>
                <div className='form-item'>
                    <label>&nbsp;</label>
                    <input type="submit" value="register"/>
                </div>
            </form>
         
        </div>
      </div>
    );
  }
}

export default Register;
