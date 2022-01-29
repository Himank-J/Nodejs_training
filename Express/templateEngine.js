const express = require('express')
const app = express()

app.set("view engine", "jade")

app.get("/index",(req,res) => {
    res.render('index',{heading:'Welcome, ALL!'})
})

Port = 3001
app.listen(Port,() =>{
    console.log(`Server started at port ${Port}`)
})