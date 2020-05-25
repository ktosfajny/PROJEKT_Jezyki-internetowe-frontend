import React from 'react';



const QuestionHolder = (props) => {

    return (
        <div className="recruit__questionHolder">
            <h3 className="recruit__questionNR">{props.questionNR}</h3>
            <p className="recruit__questionInfo">{props.questionInfo}</p>
        </div>
    )
}



export default QuestionHolder;