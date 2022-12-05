const express = require('express')
var favicon = require('serve-favicon')
var path = require('path')
var cors = require('cors')
const app = express()

app.use(express.json())
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.set('view-engine', 'ejs')

const linesRouter = require('./routes/lines')
app.use('/lines', linesRouter)
app.use(cors())

app.get('/', (req, res) => {
    res.render('index.ejs', { url: 'simp-api.tk' })
}) 

app.listen(process.env.PORT || 3000, () => {
    console.log("Server has started")
})