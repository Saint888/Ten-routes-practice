const express = require('express')

const app = express()
const PORT = 4000
// const { createEngine } = require('jsx-view-engine')


// app.set('view engine', 'jsx')
// app.engine('jsx', createEngine())

let teams = ['Portland Trailblazers', 'Phoenix Suns', 'Boston Celtics', 'Dallas Mavericks', 'New York Knicks']

app.get('/', (req, res) => {
    res.send('<h1>My top 5 NBA teams...</h1><br/><a href="/Trailblazers">Find out</a>')
})

app.get('/Trailblazers', (req, res) => {
    res.send(`<h1>${teams[0]}</h1><br/><a href="/Suns">Next</a>`)
 
})

app.get('/Suns', (req, res) => {
    res.send(`<h1>${teams[1]}</h1><br/><a href="/Celtics">Next</a>`)
})

app.get('/Celtics', (req, res) => {
    res.send(`<h1>${teams[2]}</h1><br/><a href="/Mavericks">Next</a>`)
})

app.get('/Mavericks', (req, res) => {
    res.send(`<h1>${teams[3]}</h1><br/><a href="/Knicks">Next</a>`)
})

app.get('/Knicks', (req, res) => {
    res.send(`<h1>${teams[4]}</h1><br/><a href="/">Back to top</a>`)
})

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})




   // let team = req.params.Index
    // if(team  == [0] ){
    //     res.send(team[0])  
    // }else{}
    // // }else if(mainNum == 1){
    // //     res.send(`<h2> ${mainNum} Pairs of sneakers on the wall!</h2><br/>
    // //     <a href="${mainNum - 1} ">Take the last pair down, pass it around..</a>`)
    // // }else{
    // //     res.send(`<h2>0 Pairs of sneakers on the wall!</h2><br />
    // //     <a href="/">Play again?</a>`)
    // // }