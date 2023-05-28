import React from 'react';
import "../css/singlepet.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import sendRequest from '../api/functions';

class SinglePet extends React.Component {
    constructor(props){
        super(props);
        this.state = {isFill : this.props.fill}
        this.onClick = this.onClick.bind(this);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const ownerId = this.props.ownerId;
        const animalId = this.props.animalId
        const is_adopted = this.props.is_adopted
        sendRequest(`animals/adopt/${animalId}`, "PUT", { "adopted_owner_id" : ownerId, is_adopted: is_adopted }, (e) => {alert("pet requested successfully!!")})
      }
      
      onClick(e){
        const ownerId = this.props.ownerId;
        const animalId = this.props.animalId
        sendRequest(`animals/like`, "POST", { "user_id" : ownerId, "pet_id": animalId }, (e) => {alert("pet added to favourite successfully!!")})

        this.setState({isFill : !this.state.isFill})
      }
    render() {
        return (
            <div className='singular-feature-pet'>
                <div className='to-float'>
                    <img className="pet-image" src='https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png' alt='petImage' />
                    <span onClick={this.onClick}>{ this.state.isFill || <AiFillHeart color='red' />}</span>
                    <span onClick={this.onClick}>{ !this.state.isFill || <AiOutlineHeart />}</span>
                </div>
                <br />
                <div className='featured-content'>

                    <div className='pet-name'>{this.props.name}</div>
                    <div className='pet-name'>{this.props.paragraph}</div>
                    <div className='pet-name'>{this.props.breed}</div>
                    <div className='pet-name'>{this.props.sex == 'M' ? "Male" : (this.props.age == 'F'  ? 'Female' : 'Others')}</div>
                    <div className='pet-name'>{this.props.age == 1 ? "Puppy" : (this.props.age == 2  ? 'Young' : 'Old')}</div>
                    <div className='pet-name'>{this.props.contact}</div>
                    <div className='paragraph'>
                    {this.props.paragraph || "Sed ut perspiciatis unde omnis iste natus error sit voluptatem act fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem "}
                    </div>

                      
                    <div className='action'>
                        {!this.props.button || <button>{this.props.buttonText}</button>}
                        {
                            this.props.allowRequest 
                            &&
                            <>
                                    <button onClick={this.handleSubmit}>Request Pet</button>
                            </>
                        }
                        
                    </div>



                </div>
            </div>


        );
    }
}

export default SinglePet;
