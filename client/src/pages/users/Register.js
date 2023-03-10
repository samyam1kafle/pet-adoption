import React from 'react';
import Navbar from '../../components/Navbar';
import "../../css/register.css";

class Register extends React.Component {
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
            <form>
                <div className='form-item'>
                    <label>You want to rehome/register?</label>
                    <select>
                        <option>Dog</option>
                    </select>
                </div>
                <br/>
                <div className='form-item'>
                    <label>Is the pet neutered?</label>
                    <select>
                        <option>Yes</option>
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
