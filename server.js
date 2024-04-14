const express = require('express')
const app = express();

const bodyparser =require('body-parser');
app.use(bodyparser.json());

app.listen(3000,()=>{
console.log("server start")
})


app.get('/',(req,res)=>{res.send("helllo bhai ")})
 
 app.post('api/cars',(request,response)=>{
    
 })
