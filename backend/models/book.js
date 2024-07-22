const {Schema,model, default: mongoose}=require('mongoose');
const bookSchema=new Schema({
    bookName:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true,
    },
    amount:{
     type:Number,
     required:true,
     min:0
    },
    quantity:{
        type:Number,
        required:true,
    },
    isAvailable:{
        type:Boolean,
        required:true,
        default:false
    },
    bookImage:{
        type:String,
    },
    description:{
        type:String,
        required:true,
        default:'No book description available'
    }
},{timestamps:true});
const BOOKS=mongoose.model('books',bookSchema);
module.exports=BOOKS;