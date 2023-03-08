import React from 'react';
import "../css/login.css";

class Login extends React.Component {
    render() {
      return (
        <div className="login">
              <center>
          <div className='login-section'>
              <img className='login-logo' src='' alt='logo'/>
              <h1>Pet me</h1>
              <form>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
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
