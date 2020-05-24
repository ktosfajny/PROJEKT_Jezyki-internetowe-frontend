function characterImage(app){

    const path = require('path')

// ten end-point zwraca obrazek
app.get('/api/:character', (req, res) => {

    const characterImage = `${req.params.character}.png`;

    res.sendFile(characterImage, {
        root: path.join(__dirname, '../static')
    })

})
}

module.exports = characterImage;