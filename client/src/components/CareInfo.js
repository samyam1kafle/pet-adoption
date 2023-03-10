import React from 'react';
import "../css/careandhealth.css";

class CareInfo extends React.Component {
  render() {
    const config = this.props.config
    return (
        <div className='care-content'>
            <h1>{config.heading}</h1>
            {config.paragraphs.map(e => {
                return (
                    <>
                        <p>{e}</p>
                        <br/>
                    </>
                )
            })}
        </div>
    );
  }
}

export default CareInfo;
