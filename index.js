const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(express.static('css'))

app.get('/', (req, res) => {
    res.render('index', {name: "Timur", prof: "Qa"})
})

app.get('/about', (req, res) => {
    res.render('about', {surname: "Gareev", id: 12})
})


let port = 3001
app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`)
})

