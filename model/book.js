//MVC --> Model, View 
let mongoose = require('mongoose')
//create a model class 
let BookModel = mongoose.Schema({
   Name:String, 
   Author:String, 
   Published:String,
   Price:Number
},
{
    collection:"Bio_books"
} 
) 
module.exports = mongoose.model('Book',BookModel)

