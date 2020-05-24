import React from 'react';
import '../sass/recruit.scss'

class Recruit extends React.Component {

    render() {
        return (
            <>
                <div className="recruit__wrapper">
                    <div className="recruit__btn">
                        <span className="recruit__btn-span"></span>
                        <span className="recruit__btn-span"></span>
                        <span className="recruit__btn-span"></span>
                        <span className="recruit__btn-span"></span>
                    </div>

                    <div className="recruit__questionsBox"></div>


                </div>
            </>
        );
    }
}

export default Recruit;