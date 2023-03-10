import React from 'react';
import Navbar from '../../components/Navbar';
import "../../css/messageus.css"

class MessageUs extends React.Component {
  render() {
    return (

      <div className="App">
        <Navbar/>
        <br/>
        <div className='message-form'>
          <div className='note'>
            <h1>We would love to hear from you</h1>
            <h1>Please feel free to ask or message anything :)</h1>
          </div>
          <form>
            
            <div className='form-item'>
              <label for="name">Name:</label>
              <input type="text" id='name' name='name'/>
            </div>
            <div className='form-item'>
              <label for="message">Message:</label>
              <textarea rows="6" cols="50" id='message'></textarea>
            </div>
            <div className='side-by-side'>

              <div className='form-item'>
                <label for="email">E-mail Address:</label>
                <input type="email" id='email' name='email'/>
              </div>

              <input type="submit" value="send"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MessageUs;
