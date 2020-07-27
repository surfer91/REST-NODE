const express=require('express');
const app=express();
const mongoose=require('mongoose');
const db=mongoose.connect('mongodb://localhost/bookAPI')

const port=process.env.PORT||3000;
const Book=require('./models/bookModel')
const bookRouter=express.Router();

bookRouter.route('/books').get((req,res)=>{
    const query={};
    if (req.query.genre){
        query.genre=req.query.genre
    }
    Book.find(query,(err,books)=>{
if (err){return res.send(err);}
res.json(books);
    });})
        app.use('/api',bookRouter);
app.get('/', (req,res)=>{
res.send('Welcome to my API');

})

app.listen(port,()=>{
    console.log("Running on port"+port);
})