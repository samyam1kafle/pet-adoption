import React from 'react';
import "../css/singleuserrequest.css";

class SingleUserRequest extends React.Component {
    render() {
        return (
            <div className='admin-user-request'>
                <div className='to-float'>
                    <img className="pet-image" src='https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png' alt='petImage' />
                </div>
                <br />
                <div className='featured-content'>
                <h1 className='user-name'>Ram</h1>
                    <h1 className='user-email'>test@test.com</h1>
                    <h1 className='user-phone'>9812345678</h1>
                    <h1 className='user-location'>Morang, Nepal</h1>
                    <h1 className='user-note'>I want to see this pet in my house cause my old one got glitched into matrix :v</h1>

                    <img className="pet-image-small" src='#' alt='kale' />
                    <h1 className='pet-name'>Ram</h1>
                    
                    <div className='action'>
                        <button>Accept</button>
                        <button>Decline</button>
                    </div>
                </div>
            </div>


        );
    }
}

export default SingleUserRequest;
