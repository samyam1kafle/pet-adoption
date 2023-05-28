import React from 'react';
import Navbar from '../../components/Navbar';
import "../../css/messageus.css"
import sendRequest from '../../api/functions';

class MessageUs extends React.Component {


        
  constructor(props) {
    super(props);
    this.state = {  
        name: '',
        email: '',
        message: ''
    };
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, message, email } = this.state;
    sendRequest("contactus/add", "POST", { name, message, email } , (e) => {console.log(e)})
  }
  

  render() {
    const { name, message, email } = this.state;
    return (

      <div className="App">
        <Navbar/>
        <br/>
        <div className='message-form'>
          <div className='note'>
            <h1>We would love to hear from you</h1>
            <h1>Please feel free to ask or message anything :)</h1>
          </div>
          <form  method='POST' onSubmit={this.handleSubmit}>
            
            <div className='form-item'>
              <label for="name">Name:</label>
              <input type="text" id='name' value={name} onChange={this.handleChange}  name='name'/>
            </div>
            <div className='form-item'>
              <label for="message">Message:</label>
              <textarea rows="6" cols="50" id='message' value={message} onChange={this.handleChange}  name='message'></textarea>
            </div>
            <div className='side-by-side'>

              <div className='form-item'>
                <label for="email">E-mail Address:</label>
                <input type="email" id='email' value={email} onChange={this.handleChange}  name='email'/>
              </div>

              <input type="submit" value="send"/>
            </div>
          </form>
           {/* <p style={{color: 'red', display : "block", margin : "0px 200px"}}>Message Sent Successfully</p> */}
        </div>
      </div>
    );
  }
}

export default MessageUs;
