

import React from 'react';


const CaptainImage = (props) => {

    return (
        <div className="aboutme__imageDiv">
            <img className="aboutme__image" src={props.image} alt="architect pic" />
        </div>
    )
}



export default CaptainImage

