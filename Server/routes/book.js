var express = require('express');
var router = express.Router();
let Book = require('../../model/book');
const book = require('../../model/book');
router.get('/',async(req,res,next)=>{
    try{
        const BookList = await Book.find();
        res.render('book',{
            title:'Books', 
            BookList:BookList
        }) //must use await when using async
    }
    catch(err){
        console.error(err)
        res.render('book',{
            error:'Error on Server'})
        }
    })
/*CRUD*/
/*Create  Operation --> Get route for the book list */
router.get('/add',async(req,res,next)=>{
    try{

    }
    catch(err){
        console.error(err)
        res.render('book/add',{
            title:"Add Book"
        });
    }
    try{
    }
    catch(err){
        console.error(err)
        res.render('book', {
        error: 'Error on Server'})
    }
});   

/*Create Operation --> Post route for processing the Add page*/
router.post('/add',async(req,res,next)=>{
    try{
        let newBook = Book{(
            "Name":req.body.Name, 
            "Author":req.body.Author, 
            "Published":req.body.Published, 
            "Description":req.body.Description, 
            "Price":req.body.Price
        )}
        Book.create(newBook).then(()=>{
            res.redirect('/bookslist')
        })
    }
    catch(err){
       console.error(err);
       res.render('/bookslist',{
        error: 'Error on server'
       })
    }
});
/*Update Operation --> Get route for Edit Page*/ 
router.get('/edit/:id',async(req,res,next)=>{
});
try{
   const id = req.params.id;
   const BookToEdit = await Book.findById(id);
   res.render('Book/edit',
    { 
       title: 'Edit Book',
       Book:BookToEdit
    })
}
catch(err){
    console.error(err)
    next(err);
}

/*Update Operation --> Post route for processing Edit Page*/ 
router.post('/edit/:id',async(req,res,next)=>{
});
     try{
        let id = req.params.idlet;
        let updatedBook = Book({
           "_id":id,
           "Name":req.body.Name, 
           "Author":req.body.Author,
           "Published": req.body.Published
           "Description":req.body.Description,
           "Price":req.body.Price
        })
        book.findbyIdAndUpdate(id,updatedBook).then(()=>{
            res.redirect('/bookslist')
        })
     }
     catch(err){

     }
/*Delete Operation --> Get route for Deletion*/ 
router.get('/delete/:id',(req,res,next)=>{
});
try{
    let id=req.params.id;
    Book.deleteOne({_id:id}).then(()=>{
        res.redirect('/bookslist')
    })
}
catch(err){
    console.error(err);
    res.render('Book/list', {
        error:'Error on server'
    })
}
module.exports = router; 

