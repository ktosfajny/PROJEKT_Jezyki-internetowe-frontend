import React from 'react';
import '../sass/aboutme.scss'
import netrunner from '../images/netrunner.png'
import { TweenMax } from 'gsap'

import Infobox from './Infobox'



class AboutMe extends React.Component {

    state = {
        message1: '',
        message2: '',
        letterIndex1: 0,
        letterIndex2: 0,
        intervalsAreSet: false
    }
    interval = '';
    interval2 = '';


    text = {
        text1: `The are many galactic races in our galaxy: Grey alien, Reptilians, Energy beeing, Pleiades and so on. In order to be in good relations with each other race, we need to present ourselves as great, strong and willful beeings. It can't be achived without strong space force. So if you feel you are fitting us, let us know!`,
        text2: `Bio-mechanics, Net-runners, Hardware Mechanics, Smart ones and everyone who feel capable to handle cosmic tasks! Take the test and check if you are the one we are looking for!`
    }



    showNextLetter = (messageNR) => {

        if (messageNR === 1) {
            const { message1, letterIndex1 } = this.state
            const { text1 } = this.text

            let newMessage1 = message1;

            this.setState({
                message1: newMessage1 += text1[letterIndex1],
                letterIndex1: letterIndex1 + 1
            })
        }

        else {
            const { message2, letterIndex2 } = this.state
            const { text2, } = this.text

            let newMessage2 = message2;

            this.setState({
                message2: newMessage2 += text2[letterIndex2],
                letterIndex2: letterIndex2 + 1
            })
        }
    }



    componentDidMount() {
        const message = document.querySelectorAll('.aboutme__info')

        window.addEventListener('scroll', () => {

            const offset = window.pageYOffset
            const aboutMeOffset = document.querySelector('.header').clientHeight;

            if (offset > aboutMeOffset * 0.7 && !this.state.intervalsAreSet) {


                TweenMax.to(message, 1, {
                    width: '100%'
                })

                setTimeout(() => {
                    this.interval = setInterval(this.showNextLetter.bind(this, 1), 80)
                    this.interval2 = setInterval(this.showNextLetter.bind(this, 2), 80)

                }, 1000)

                this.setState({
                    intervalsAreSet: true,
                })
            }
        })
    }

    componentDidUpdate() {
        const { letterIndex1, letterIndex2 } = this.state
        const { text1, text2 } = this.text

        if (letterIndex1 >= text1.length - 1) {
            clearInterval(this.interval)
        }

        if (letterIndex2 >= text2.length) {
            clearInterval(this.interval2)
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        clearInterval(this.interval2)
    }


    render() {
        return (
            <>
                <div className="aboutme__wrapper">

                    <div className="aboutme__right-titles">
                        <div className="aboutme__right-subtitle-box"><span className="aboutme__right-subtitle">History</span></div>
                        <div className="aboutme__right-subtitle-box"><span className="aboutme__right-subtitle">Mission Data</span></div>
                    </div>

                    <div className="aboutme__cybershape">
                        <span className="aboutme__cybershape-neon-top"></span>
                        <span className="aboutme__cybershape-neon-right"></span>

                        <div className="aboutme__ls">
                            <div className="aboutme__title-wrap">
                                <h2 className="aboutme__title">Architect <span className="aboutme__span"></span></h2>
                            </div>
                            <div className="aboutme__imageDiv">
                                <img className="aboutme__image" src={netrunner} alt="architect pic" />
                            </div>
                        </div>

                        <div className="aboutme__rs">

                            <Infobox
                                title='WE NEED YOUR HELP'
                                message={this.state.message1}
                                wrapperClass='aboutme__info-box'
                                titleClass='aboutme__info-title'
                                infoClass='aboutme__info'
                                cursorClass='aboutme__cursor'
                            />

                            <Infobox
                                title='WHO WE NEED?'
                                message={this.state.message2}
                                wrapperClass='aboutme__info-box'
                                titleClass='aboutme__info-title'
                                infoClass='aboutme__info'
                                cursorClass='aboutme__cursor'
                            />


                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default AboutMe;