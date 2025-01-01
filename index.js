const express = require('express');
const app =express();
require('dotenv').config()


const port =process.env.PORT

app.get('/',(req,res)=>{
     res.send('i am here')
})
app.get('/about',(req,res)=>{    
    res.send('i am about')
})
app.get('/contact',(req,res)=>{
    res.send('i am contact')
})  
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})