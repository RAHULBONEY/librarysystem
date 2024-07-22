const express=require('express');
const router=express.Router();
const Books=require('../models/book.js')
router.get('/',async(req,res)=>{
    try {
        const books=await Books.find({});
        return res.status(200).json({
            count:books.length,
            data:books,
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})
router.post('/',async(req,res)=>{
    try {
        if(
           !req.body.bookName || !req.body.genre || !req.body.amount || !req.body.quantity ||!req.body.isAvailable || !req.body.description 
        ){
            return res.status(400).send({
                message:`Send all required fields`,
            })
        }
        const newBook={
            bookName:req.body.bookName,
            genre:req.body.genre,
            amount:req.body.amount,
            description:req.body.description,
            quantity:req.body.quantity
        }
        const book=await Books.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
    });
module.exports=router;    