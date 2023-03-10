import React from 'react';
import "../css/adminsinglepet.css";

class AdminSinglePet extends React.Component {
    render() {
        return (
            <div className='admin-singular-feature-pet'>
                <div className='to-float'>
                    <img className="pet-image" src='https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png' alt='petImage' />
                </div>
                <br />
                <div className='featured-content'>
                    <h1 className='pet-name'>Bruno</h1>
                    <div className='action'>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>


        );
    }
}

export default AdminSinglePet;
