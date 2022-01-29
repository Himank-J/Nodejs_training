const express = require('express')
const bodyParser = require('body-parser');
const mongoose =  require('mongoose');
const userRouter = require("./routes/user.js");

app.use("/user", userRouter);

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

const CONNECTION_URL = 'mongodb+srv://cram_js:atlasdb@cluster0.zdsqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));







/*const express = require('express')
const path = require('path');
const bodyparser = require('body-parser')
const fs = require('fs')

const app = express()
app.use(bodyparser.json())

const loggermw = (req,res,next) => {
    data = `Request method: ${req.method}
            Request url: ${req.url}`
    fs.writeFileSync(path.join(__dirname+'/logs/logs.txt'),data)
    next()
}
app.get("/home",(req,res) => {
    res.send("Home Page")
})

app.get("/home/:id",loggermw,(req,res)=>{
    console.log(req.params)
    const { id } = req.params;
    res.send("ID: "+id+" received!")
})

app.get("/name",(req,res) => {
    console.log(req.query)
    var name = req.query.name;
    res.send("Name: "+name+" received!")
})

app.get("/homepage",(req,res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'))
})

app.post("/products",(req,res) => {
    console.log(req.body)
    res.send("Success")
})

app.all('*',(req,res) => {
    res.status(404).send("Not found")
})
Port = 3001
app.listen(Port,() =>{
    console.log(`Server started at port ${Port}`)
})*/