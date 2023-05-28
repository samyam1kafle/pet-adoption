import React from 'react';
import "../../css/login.css";
import sendRequest from '../../api/functions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
        username: '',
        password: '',
    };
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    sendRequest("login-user", "POST", { username, password } , (e) => {
      if(!e.data.success){
        if(username == "admin" && password == "admin"){
          window.location = '/allanimals'
        }
        alert("Invalid username or password")
      }else{
        window.location = "/";

      }
    })
  }
  
    render() {
    const { username, password } = this.state;
    return (
        <div className="login">
              <center>
          <div className='login-section'>
              <img className='login-logo' src='' alt='logo'/>
              <h1>Pet me</h1>
              <form onSubmit={this.handleSubmit}>
                <input value={username} onChange={this.handleChange} name="username" type="text" placeholder='Username' required/>
                <input value={password} onChange={this.handleChange} name="password" type="password" placeholder='Password' required/>
                <input type="submit" value="Sign In"/>
              </form>
                <br/>
                <a href='#' >Forgot Password?</a>
                <br/>
                <br/>
                <a href='#' >Do you have an Account?</a>

          </div>
              </center>
        </div>
      );
    }
}

export default Login;
