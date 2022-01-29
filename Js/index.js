const http=require("http")
const { type } = require("os")
const url=require("url")
const app=http.createServer((req,res)=>{
const querydata=url.parse(req.url,true)
console.log(querydata.query)
const search=querydata.query.search
const price=querydata.query.price
res.writeHead(200,{"Content-Type":"text/html"})
if(search==="redmi"&&Number(price)===12000){
    res.write("<h2> Redmi not pro </h2>")
    res.end()
}

/*if(querydata.pathname==="/products"){
    
    res.write("<h2>Products Page </h2>")
    res.end()
}
else if (querydata.pathname==="/checkout"){
   
    res.write("<h3>CheckOut</h3>")
    res.end()
}*/

})
app.listen(3000,()=>console.log("Server started in port : 3000"))