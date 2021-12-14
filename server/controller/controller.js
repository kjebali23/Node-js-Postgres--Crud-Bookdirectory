const pool = require('../database/database');

exports.books = async (req,res) =>{
    try{
    const books = await pool.query(
        "SELECT * FROM book ; "
    )
    res.status(200).send(books.rows);
    }catch(error){
        res.status(400).send('An Error occured. try again');
    }
}


exports.add = async (req,res)=>{
    data = req.body;
    let book_name = data.book_name;
    let author_name = data.author_name;
    let main_category = data.main_category;
    let sub_category = data.sub_category;
    let date_of_publish = data.date_of_publish;
    let sold_copies = data.sold_copies;
    try{
    const newBook = await pool.query(
        `INSERT INTO book (book_name, author_name,main_category,sub_category,date_of_publish,sold_copies)
         VALUES ('${book_name}','${author_name}','${main_category}','${sub_category}','${date_of_publish}','${sold_copies}'); `
    )
        res.status(200).send(`${book_name} has been added successfuly.`);
    }catch(error){
        console.log(error);
        res.status(400).send(`An error occured could , ${book_name} was not added..`);
    }
    
}

exports.delete = async (req,res)=>{
    let book = req.body.book_name;
    let author = req.body.author_name;
    try{
    const deletebook = await pool.query(
        `DELETE FROM book
         WHERE book_name = '${book}' AND author_name = '${author}';`
    )
    res.status(200).send(`${book} by ${author} got deleted.`);
    }catch(error){
        console.log(error);
        res.status(400).send(`An error occured, ${book} was not deleted.`);
    }
}

exports.update = async (req,res)=>{
    if(!req.body){
        return res.status(400).send("Data to update cannot be empty");
    }
    const id = req.params.id;
    try{
        let update_book = await pool.query(
            `UPDATE book
             SET book_name = '${req.body.book_name}', author_name = '${req.body.author_name}' , main_category = '${req.body.main_category}' , sub_category = '${req.body.sub_category}',
             date_of_publish = '${req.body.date_of_publish}' , sold_copies = '${req.body.sold_copies}'
             WHERE id = ${id};`
        )
        res.status(200).send('data updated');

    }catch(err){
        console.log(err);
        res.status(400).send(`An error happened, Could not update ${book_name}.`);
    }
}