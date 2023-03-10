import React from 'react';
import "../../css/signup.css";

class Signup extends React.Component {
    render() {
      return (
        <div className="signup">
              <center>
          <div className='signup-section'>
              <img className='signup-logo' src='' alt='logo'/>
              <h1>Pet me</h1>
              <form>
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <input type="email" placeholder='Email'/>
                <input type="submit" value="Done"/>
              </form>
                <p>By signing up you agree to our terms and conditions</p>

          </div>
              </center>
        </div>
      );
    }
}

export default Signup;
