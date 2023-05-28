import React from 'react';
import "../css/navbar.css";

class Navbar extends React.Component {
  onClick(e){
    if(e.target.textContent == "Adopt"){
      window.location = '/'
    }else{
      window.location = '/register'
    }
  }
  render() {
    return (
        <div className='navbar'>

          <div className='logo nav-item'>
            <img src='' alt='logo' />
          </div>
          <nav className='nav-item'>
            <div className='nav-toggle'>
              <button onClick={this.onClick} className='selected-button'>Adopt</button>
              <button  onClick={this.onClick}>Rehome</button>
            </div>

            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/animals'>Animal</a></li>
              <li><a href='/careandhealth'>Pet care & Health</a></li>
              <li><a href='/petnearme'>Pet near me</a></li>
              <li><a href='/signup'>Sign in</a></li>
              <li><a href='/messageus'>Message us</a></li>
            </ul>
          </nav>
        </div>


    );
  }
}

export default Navbar;
