const express = require('express')

const app = express()
const PORT = 4000
// const { createEngine } = require('jsx-view-engine')


// app.set('view engine', 'jsx')
// app.engine('jsx', createEngine())

let teams = [
    'Portland Trailblazers', 'Phoenix Suns', 
'Boston Celtics', 'Dallas Mavericks', 'New York Knicks', 
'Philadephia 76ers','Milwaukee Bucks', 'Los Angeles Lakers', 
'Minnesota Timberwolves', 'Denver Nuggets' 
]

app.get('/', (req, res) => {
    res.send('<h1>My top 5 NBA teams...</h1><br/><a href="/Trailblazers">Find out</a>')
})

app.get('/Trailblazers', (req, res) => {
    res.send(`<h1>1. ${teams[0]}</h1><br/><a href="/Suns">Next</a>`)
 
})

app.get('/Suns', (req, res) => {
    res.send(`<h1>2. ${teams[1]}</h1><br/><a href="/Celtics">Next</a>`)
})

app.get('/Celtics', (req, res) => {
    res.send(`<h1>3. ${teams[2]}</h1><br/><a href="/Mavericks">Next</a>`)
})

app.get('/Mavericks', (req, res) => {
    res.send(`<h1>4. ${teams[3]}</h1><br/><a href="/Knicks">Next</a>`)
})

app.get('/Knicks', (req, res) => {
    res.send(`<h1>5. ${teams[4]}</h1><br/><a href="/Sixers">Back to top</a>`)
})

app.get('/Sixers', (req, res) => {
    res.send(`<h1>6. ${teams[5]}</h1><br/><a href="/Bucks">Back to top</a>`)
})

app.get('/Bucks', (req, res) => {
    res.send(`<h1>7. ${teams[6]}</h1><br/><a href="/Lakers">Back to top</a>`)
})

app.get('/Lakers', (req, res) => {
    res.send(`<h1>8. ${teams[7]}</h1><br/><a href="/Timberwolves">Back to top</a>`)
})

app.get('/Timberwolves', (req, res) => {
    res.send(`<h1>9. ${teams[8]}</h1><br/><a href="/Nuggets">Back to top</a>`)
})

app.get('/Nuggets', (req, res) => {
    res.send(`<h1>10. ${teams[9]}</h1><br/><a href="/">Back to top</a>`)
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