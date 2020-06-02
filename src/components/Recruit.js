import React from 'react';
import '../sass/recruit.scss'
import { TweenMax } from 'gsap'

import MainFetchButton from './MainFetchButton'
import AnswerOption from './AnswerOption'
import CharacterImage from './CharacterImage'
import QuestionHolder from './QuestionHolder'


class Recruit extends React.Component {

    nextQuestionNR = 0;
    currentState = [0, 0, 0, 0];

    state = {
        questionNR: '',
        questionInfo: '',
        answerInfo1: '',
        answerInfo2: '',
        answerInfo3: '',
        answerInfo4: '',
        showCharacterImage: false,
        character: '',
        mainButtonIsClicked: false,
        spansAreNotVisible: false,
    }




    //ta funkcja jedynie wypełnia pola z pytaniami zdobytymi pytaniami
    fillQuestionElements(data, type) {

        if (!data.result) {
            const { questionNR, questionInfo, answerInfo } = data.question

            this.setState({
                questionNR,
                questionInfo,
                answerInfo1: answerInfo[0],
                answerInfo2: answerInfo[1],
                answerInfo3: answerInfo[2],
                answerInfo4: answerInfo[3],
                showAnswers: true,
            })

        } else {
            const { name, info } = data.character
            if (type === 1) {
                this.setState({
                    questionNR: name,
                    questionInfo: info,
                })
            } else if (type === 2) {

                this.setState({
                    showAnswers: false,
                    showCharacterImage: true,
                    character: name,
                    spansAreNotVisible: true,
                })
            }




        }
    }

    handleFadingBeforeResult = (data) => {
        const recruitAnswers = document.querySelectorAll('.recruit__answer');
        const questionSpans = document.querySelectorAll('.recruit__questionHolder span')

        recruitAnswers.forEach(answer => {
            TweenMax.to(answer, 1, {
                opacity: 0,

            })
        })

        questionSpans.forEach(questionSpan => {
            TweenMax.to(questionSpan, 1, {
                opacity: 0,

            })
        })

        // 3 razy używam setTimeout bo nie mogłem zapanować nad wykonaniem się tych fragmentó kodu w odpowiedniej kolejności
        setTimeout(() => {
            this.fillQuestionElements(data, 2)
        }, 1000)


        setTimeout(() => {
            this.fillQuestionElements(data, 1)
        }, 1001)

        setTimeout(() => {
            questionSpans.forEach(questionSpan => {
                TweenMax.to(questionSpan, 2, {
                    delay: 1,
                    opacity: 1,
                })
            })

            const characterImage = document.querySelector('.recruit__characterImage')
            TweenMax.to(characterImage, 2, {
                delay: 1,
                opacity: 1,
            })
        }, 1002)
    }


    //ta funkcja fetchuje dane i jeśli się uda je zdobyć to wywołuje funkcje uzupełniającą pola z pytaniami
    handleFetchData = (buttonNR) => {

        const stats = this.currentState

        stats.forEach((stat, statIndex) => {
            if (statIndex + 1 === buttonNR) {
                stats[statIndex]++;
            }
        })

        fetch('https://future-is-now-server.herokuapp.com/api/question', {
            method: 'POST',
            body: JSON.stringify({
                nextQuestionNR: this.nextQuestionNR,
                stats,
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

                if (data.result) {
                    this.handleFadingBeforeResult(data)
                } else {
                    this.fillQuestionElements(data)
                }
            })
    }


    //ta funkcja obsługuje animację buttona, pojawienie się panelu z pytaniami oraz wywołuje funkcję fetch
    handleMainButtonClick = (e) => {

        this.handleFetchData()

        const actionBtn = e.target;

        if (!this.state.mainButtonIsClicked) {
            actionBtn.classList.add('clicked')

            this.setState({
                mainButtonIsClicked: true,
            })
        }

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

    // ta funkcja obsługuje pobranie kolejnego pytania poprzez jeśli kliknęło się na któryś z kolorowych buttonów
    handleFetchNextQuestion = (buttonNR) => {
        this.nextQuestionNR++;
        this.handleFetchData(buttonNR)


    }


    render() {

        const { questionNR, questionInfo, answerInfo1, answerInfo2, answerInfo3, answerInfo4, showAnswers, showCharacterImage, character, spansAreNotVisible } = this.state

        return (
            <>
                <div className="recruit__wrapper">

                    <MainFetchButton click={this.handleMainButtonClick} />

                    <div className="recruit__questionsBox">
                        <div className="recruit__cybershape">

                            <div className="recruit__ls">
                                <QuestionHolder spansVisible={spansAreNotVisible} questionNR={questionNR} questionInfo={questionInfo} />
                            </div>

                            <div className="recruit__rs">
                                <div className="recruit__answersHolder">

                                    {showCharacterImage && <CharacterImage character={character} />}

                                    {showAnswers && <AnswerOption
                                        answerInfo={answerInfo1}
                                        click={() => this.handleFetchNextQuestion(1)}
                                        colorClass="blue"
                                    />}

                                    {showAnswers && <AnswerOption
                                        answerInfo={answerInfo2}
                                        click={() => this.handleFetchNextQuestion(2)}
                                        colorClass="green"
                                    />}

                                    {showAnswers && <AnswerOption
                                        answerInfo={answerInfo3}
                                        click={() => this.handleFetchNextQuestion(3)}
                                        colorClass="yellow"
                                    />}

                                    {showAnswers && <AnswerOption
                                        answerInfo={answerInfo4}
                                        click={() => this.handleFetchNextQuestion(4)}
                                        colorClass="red"
                                    />}
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