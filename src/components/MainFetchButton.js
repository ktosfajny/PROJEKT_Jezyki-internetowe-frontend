import React from 'react';
import '../sass/MainFetchButton.scss'

const MainFetchButton = (props) => {

    return (
        <div className="recruit__btn" onClick={props.click}>
            <span className="recruit__btn-span"></span>
            <span className="recruit__btn-span"></span>
            <span className="recruit__btn-span"></span>
            <span className="recruit__btn-span"></span>
        </div>
    )
}


export default MainFetchButton



