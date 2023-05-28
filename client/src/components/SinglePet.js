import React from 'react';
import "../css/singlepet.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import sendRequest from '../api/functions';

class SinglePet extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const ownerId = this.props.ownerId;
        const animalId = this.props.animalId
        const is_adopted = this.props.is_adopted
        sendRequest(`animals/adopt/${animalId}`, "PUT", { "adopted_owner_id" : ownerId, is_adopted: is_adopted }, (e) => {alert("pet requested successfully!!")})
      }
      
    render() {
        return (
            <div className='singular-feature-pet'>
                <div className='to-float'>
                    <img className="pet-image" src='https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png' alt='petImage' />
                    <span>{ this.props.fill || <AiFillHeart />}</span>
                    <span>{ !this.props.fill || <AiOutlineHeart />}</span>
                </div>
                <br />
                <div className='featured-content'>

                    <h1 className='pet-name'>{this.props.petName || "Bruno"} </h1>
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
