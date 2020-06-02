import React from 'react';
import '../sass/RightSubtitleBox.scss'
const RightSubtitleBox = (props) => {

    return (
        <div className='aboutme__right-subtitle-box'><span className='aboutme__right-subtitle'>{props.title}</span>
        </div>
    )
}



export default RightSubtitleBox


