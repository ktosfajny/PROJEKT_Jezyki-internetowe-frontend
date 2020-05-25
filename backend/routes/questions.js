function questions(app) {

    const fs = require('fs')


    let questionsDB;

    fs.readFile('database.json', 'utf8', (err, data) => {
        if (err) return console.log('Error: ' + err)
        else questionsDB = JSON.parse(data)
    })

    let characters;
    fs.readFile('charactersDB.json', 'utf8', (err, data) => {
        if (err) return console.log('Error: ' + err)
        else characters = JSON.parse(data)
    })


    //ten end-point obsługuje wysyłanie kolejnych pytań i okreslenie jaki jest typ characteru
    app.post('/api/question', (req, res) => {

        const { nextQuestionNR, stats } = req.body

        //jeśli odpowiedziales juz na wszystko to w tym if'ie zwroci się ostateczny wynik
        if (nextQuestionNR === questionsDB.length) {

            //sprawdzenie typu postaci
            let characterNumber = Math.max(stats[0], stats[1], stats[2], stats[3])
            characterIndex = stats.findIndex(stat => stat === characterNumber)

            res.json({
                result: 'result',
                character: characters[characterIndex],
            })

        } else {

            const nextQuestion = questionsDB[nextQuestionNR]
            res.json({
                question: nextQuestion,
            })

        }

    })

}

module.exports = questions