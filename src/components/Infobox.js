import React from 'react';
import '../sass/InfoBox.scss'


const Infobox = (props) => {

    return (
        <div className='aboutme__info-box'>
            <h3 className='aboutme__info-title'>{props.title}</h3>
            <p className='aboutme__info'>{props.message}<span className='aboutme__cursor'>|</span>
            </p>
        </div>
    )
}



export default Infobox;