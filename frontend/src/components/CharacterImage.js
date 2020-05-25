import React from 'react';


const CharacterImage = (props) => {

    return (
        <img className="recruit__characterImage" src={`http://localhost:5000/api/${props.character}`} alt="character" />
    )
}



export default CharacterImage




