import React from 'react';
import "../../css/signup.css";
import sendRequest from '../../api/functions';
import { useNavigate } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      username: '',
      password: '',
      email: ''
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { f_name, l_name, username, password, email } = this.state;
    
    // Make an API call with the form data
    // Replace 'apiEndpoint' with the actual API endpoint
    sendRequest("user/add", "POST", { email, password, "name" : `${f_name} ${l_name}`, contact : 'xxxx'} , (e) => {
      window.location = "/login";

    })
    
  }
    render() {

      const { f_name, l_name, username, password, email } = this.state;
      return (
        <div className="signup">
              <center>
          <div className='signup-section'>
              <img className='signup-logo' src='' alt='logo'/>
              <h1>Pet me</h1>
              <form onSubmit={this.handleSubmit}>
                <input value={f_name} onChange={this.handleChange} name="f_name" type="text" placeholder='First Name' required/>
                <input value={l_name} onChange={this.handleChange} name="l_name" type="text" placeholder='Last Name' required/>
                <input value={username} onChange={this.handleChange} name="username" type="text" placeholder='Username' required/>
                <input value={password} onChange={this.handleChange} name="password" type="password" placeholder='Password' required/>
                <input value={email} onChange={this.handleChange} name="email" type="email" placeholder='Email' required/>
                <input name="submit" type="submit" value="Done"/>
              </form>
                <p style={{color: 'red'}}></p>
                <p>By signing up you agree to our terms and conditions</p>

          </div>
              </center>
        </div>
      );
    }
}

export default Signup;
