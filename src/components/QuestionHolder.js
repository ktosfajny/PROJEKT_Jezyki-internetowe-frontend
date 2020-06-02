import React from 'react';
import '../sass/QuestionHolder.scss'


const QuestionHolder = (props) => {

    return (
        <div className="recruit__questionHolder">
            <h3 className="recruit__questionNR" ><span >{props.questionNR}</span></h3>
            <p className="recruit__questionInfo" ><span >{props.questionInfo}</span></p>
        </div>
    )
}



export default QuestionHolder;