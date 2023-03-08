import React from 'react';
import "../css/singlepet.css";

class SinglePet extends React.Component {
    render() {
        return (
            <div className='singular-feature-pet'>
                <div className='to-float'>
                    <img className="pet-image" src='https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png' alt='petImage' />
                    <span>heart</span>
                </div>
                <br />
                <div className='featured-content'>

                    <h1 className='pet-name'>Bruno</h1>
                    <div className='paragraph'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem act fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                    </div>
                </div>
            </div>


        );
    }
}

export default SinglePet;
