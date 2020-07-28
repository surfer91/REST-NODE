const express=require('express');
const app=express();
const mongoose=require('mongoose');
var bodyParser = require('body-parser');
if (process.env.ENV==='Test'){
    console.log('This is a test');
    const db=mongoose.connect('mongodb://localhost/bookAPI');
}
else{
    console.log('This is for real');
}


const port=process.env.PORT||3000;
const Book=require('./models/bookModel')
const bookRouter=require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




        app.use('/api',bookRouter);
app.get('/', (req,res)=>{
res.send('Welcome to my API');

})

app.server=app.listen(port,()=>{
    console.log("Running on port"+port);
})

module.exports=app;