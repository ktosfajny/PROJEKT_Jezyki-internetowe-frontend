import React from 'react';
import '../sass/recruit.scss'
import { TweenMax } from 'gsap'

class Recruit extends React.Component {

    state = {
        questionNR: '',
        questionInfo: '',
        answerInfo1: '',
        answerInfo2: '',
        answerInfo3: '',
        answerInfo4: ''
    }


    fillQuestionElements(data) {

        console.log(data)
        const { questionNR, questionInfo, answerInfo } = data.question

        this.setState({
            questionNR,
            questionInfo,
            answerInfo1: answerInfo[0],
            answerInfo2: answerInfo[1],
            answerInfo3: answerInfo[2],
            answerInfo4: answerInfo[3]
        })

        // { questionNR: `3. gthtrh`, questionInfo: `rewgew`, answerInfo: [`dh`, `htht`, ` yukmdudjy`, `myfg`] },


    }



    handleFetchData = () => {
        // const { nextQuestionNR, stats } = req.body

        let nextQuestionNR = 0;

        //to będzie moja odpowiedź z servera
        // { questionNR: `3. gthtrh`, questionInfo: `rewgew`, answerInfo: [`dh`, `htht`, ` yukmdudjy`, `myfg`] },

        fetch('http://localhost:5000/api/question', {
            method: 'POST',
            body: JSON.stringify({
                nextQuestionNR,
                stats: []
            }), headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res
                }
                else {
                    return console.log('something went wrong!')
                }
            })
            .then(res => res.json())
            .then(data => {
                this.fillQuestionElements(data)
            })

    }


    handleButtonClick = (e) => {

        this.handleFetchData()

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

        const { questionNR, questionInfo, answerInfo1, answerInfo2, answerInfo3, answerInfo4 } = this.state

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
                                    <h3 className="recruit__questionNR">{questionNR}</h3>
                                    <p className="recruit__questionInfo">{questionInfo}</p>
                                </div>
                            </div>
                            <div className="recruit__rs">
                                <div className="recruit__answersHolder">

                                    <div className="recruit__answer">
                                        <div className="recruit__answerInfo">
                                            {answerInfo1}
                                        </div>
                                        <button className="recruit__option-btn">
                                            Choose
                                    </button>
                                    </div>

                                    <div className="recruit__answer">
                                        <div className="recruit__answerInfo">
                                            {answerInfo2}
                                        </div>
                                        <button className="recruit__option-btn recruit__option-btn--green">
                                            Choose
                                    </button>
                                    </div>


                                    <div className="recruit__answer">
                                        <div className="recruit__answerInfo">
                                            {answerInfo3}
                                        </div>
                                        <button className="recruit__option-btn recruit__option-btn--yellow">
                                            Choose
                                    </button>
                                    </div>


                                    <div className="recruit__answer">
                                        <div className="recruit__answerInfo">
                                            {answerInfo4}
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