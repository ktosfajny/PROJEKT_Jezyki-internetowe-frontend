import React from 'react';

const Infobox = (props) => {

    return (
        <div className={props.wrapperClass}>
            <h3 className={props.titleClass}>{props.title}</h3>
            <p className={props.infoClass}>{props.message}<span className={props.cursorClass}>|</span>
            </p>
        </div>
    )
}



export default Infobox;