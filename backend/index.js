const express=require('express');
const cors = require('cors'); 
const { PORT,mongoConnection} = require('./config');
const mongoose=require('mongoose');
const BOOKS = require('./models/book');
const bookRoute=require('./routes/books.js')
const app=express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
return res.status(234).send('Libsys');
});
app.use('/books',bookRoute);
mongoose.connect(mongoConnection)
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
        console.log(`App is running on port:${PORT}`);
    });
})
.catch((error)=>{console.log(error)});