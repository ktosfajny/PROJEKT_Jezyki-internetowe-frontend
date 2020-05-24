function questions(app) {




    const questionsDB = [
        { questionNR: `1. what would you do when see an alien?`, questionInfo: `Every action takes reaction so pay atention to what you're doing. Depending on what would you do, you may obtain an ally, an foe, friend or sometimes even someone who can change the way you see the world.`, answerInfo: [`I would try to hide and plug my computer to the local web so I can observe the other beeing and decide what should I do.`, `New creature? It means only one thing: New preparation for the laboratory. I would try to get some of its DNA or blood and examine it.`, ` I'm not interested in living beeings. Only creatures that surrended their live to the machines are worth checking! I would let it go.`, `There is only one way to survive. You must be strong. I would let it go, but if it would be dangerous I would be less polite...`] },
        { questionNR: `2. asdasdasdasdas?`, questionInfo: `dfbdffsdbdfbdf`, answerInfo: [`dfgdfgdfgfdg`, `tjsnr`, ` yjyrsrthb`, `segrsg`] },
        { questionNR: `3. gthtrh`, questionInfo: `rewgew`, answerInfo: [`dh`, `htht`, ` yukmdudjy`, `myfg`] },
        { questionNR: `4. trhjy6h?`, questionInfo: `43657t5rhf`, answerInfo: [`th5y7`, `7irs6h`, `6u6s6h`, `5weg`] },
    ]


    app.post('/api/question', (req, res) => {

        const { nextQuestionNR, stats } = req.body


        //jeśli odpowiedziales juz na wszystko to tutaj zwroci się ostateczny wynik
        if (nextQuestionNR === questionsDB.length) {
            res.json({
                result: 'result' //tutaj użytję 'stats'
            })

        } else {

            const nextQuestion = questionsDB[nextQuestionNR]
            res.json({
                question: nextQuestion,
            })

        }

    })


}

module.exports = questions;