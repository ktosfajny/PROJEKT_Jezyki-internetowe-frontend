import React from 'react';


const AnswerOption = (props) => {

    return (
        <div className="recruit__answer">
            <div className="recruit__answerInfo">
                {props.answerInfo}
            </div>
            <button className={`recruit__option-btn recruit__option-btn--${props.colorClass}`} onClick={props.click}>
                Choose
            </button>
        </div>
    )
}



export default AnswerOption




