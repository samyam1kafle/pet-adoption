import axios from 'axios';
import React from 'react';
import "../css/adminsinglepet.css";
import API_URL from '../api';

class AdminSinglePet extends React.Component {
    onChange(e){
        let id = e.target.id
        let postfix = `animals/delete/${id}`
        axios.delete(`${API_URL}${postfix}`)
        .then((e) => {console.log(e); window.location = '/allanimals'})
        .catch((e) => console.log(e));
    }
    render() {
        return (
            <div className='admin-singular-feature-pet'>
                <div className='to-float'>
                    <img className="pet-image" src='https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png' alt='petImage' />
                </div>
                <br />
                <div className='featured-content'>
                    <h1 className='pet-name'>{this.props.name}</h1>
                    <h1 className='pet-name'>{this.props.paragraph}</h1>
                    <h1 className='pet-name'>{this.props.breed}</h1>
                    <h1 className='pet-name'>{this.props.sex == 'M' ? "Male" : (this.props.age == 'F'  ? 'Female' : 'Others')}</h1>
                    <h1 className='pet-name'>{this.props.age == 1 ? "Puppy" : (this.props.age == 2  ? 'Young' : 'Old')}</h1>
                    <h1 className='pet-name'>{this.props.contact}</h1>
                    <div className='action'>
                        <button>Edit</button>
                        <button id={this.props.id} onClick={this.onChange}>Delete</button>
                    </div>
                </div>
            </div>


        );
    }
}

export default AdminSinglePet;
