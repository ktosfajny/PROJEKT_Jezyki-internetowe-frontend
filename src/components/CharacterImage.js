import React from 'react';


const CharacterImage = (props) => {

    return (
        <img className="recruit__characterImage" src={`https://future-is-now-server.herokuapp.com/api/${props.character}`} alt="character" />
    )
}



export default CharacterImage




