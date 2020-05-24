import React from 'react';
import '../sass/recruit.scss'
import { TweenMax } from 'gsap'

class Recruit extends React.Component {


    handleButtonClick = (e) => {
        const actionBtn = e.target;
        TweenMax.to(actionBtn, 2, {
            top: '20%',
        })

        TweenMax.to(actionBtn, 2, {
            display: 'none',
            opacity: 0
        })

        const questionsBox = document.querySelector('.recruit__questionsBox')
        TweenMax.to(questionsBox, 1, {
            delay: 3,
            display: 'block',
            opacity: 1
        })
    }


    render() {
        return (
            <>
                <div className="recruit__wrapper">
                    <div className="recruit__btn" onClick={this.handleButtonClick}>
                        <span className="recruit__btn-span"></span>
                        <span className="recruit__btn-span"></span>
                        <span className="recruit__btn-span"></span>
                        <span className="recruit__btn-span"></span>
                    </div>

                    <div className="recruit__questionsBox">
                        <div className="recruit__cybershape">
                            <div className="recruit__ls">
                                <div className="recruit__questionHolder">
                                    <h3 className="recruit__questionNR">1. what would you do when see an alien?</h3>
                                    <p className="recruit__questionInfo">Every action takes reaction so pay atention to what you're doing. Depending on what would you do, you may obtain an ally, an foe, friend or sometimes even someone who can change the way you see the world.</p>
                                </div>
                            </div>
                            <div className="recruit__rs">
                                <div className="recruit__answersHolder">

                                    <div className="recruit__answer">
                                        <div className="recruit__answerInfo">
                                            ery action takes reaction so pay atention to what you're doing. Depending on what would you do
                                        </div>
                                        <button className="recruit__option-btn">
                                            Choose
                                    </button>
                                    </div>

                                    <div className="recruit__answer">
                                        <div className="recruit__answerInfo">
                                            ery action takes reaction so pay atention to what you're doing. Depending on what would you do
                                        </div>
                                        <button className="recruit__option-btn recruit__option-btn--green">
                                            Choose
                                    </button>
                                    </div>


                                    <div className="recruit__answer">
                                        <div className="recruit__answerInfo">
                                            ery action takes reaction so pay atention to what you're doing. Depending on what would you do
                                        </div>
                                        <button className="recruit__option-btn recruit__option-btn--yellow">
                                            Choose
                                    </button>
                                    </div>


                                    <div className="recruit__answer">
                                        <div className="recruit__answerInfo">
                                            ery action takes reaction so pay atention to what you're doing. Depending on what would you do
                                        </div>
                                        <button className="recruit__option-btn recruit__option-btn--red">
                                            Choose
                                    </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </>
        );
    }
}

export default Recruit;