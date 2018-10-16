// /controllers/PagesController.js 

const mysql = require("mysql");
// Connection info for the PagesController
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'root',
//   database: 'orbweaver_db'
// });
// connection.connect();
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('orbweaver.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the orbweaver database.');
});
// const connection = db.connection;

// export methods to the routes/api/Pages.js file  
module.exports = {
    findAll: function(req, res) {      
      db.all("Select * from pages", function ( error, results, fields){
      if (error) throw error;
         res.send(results)     
    });    
  },     
    findOne: function(req, res) {
      const id = req.params.id;    
      console.log(id);  
      db.all("Select * from pages where id =" + id, function ( error, results, fields){
      if (error) throw error;
         res.send(results)     
    }) 
  },      
    create: function(req, res) {
    // const id = req.params.id;
    const page_path = req.body.page_path;
    const upload_time = req.body.upload_time; 
    const author_text=  req.body.author_text;
    const next_page =  req.body.next_page;
    const book_id = req.body.book_id;
    const chapter_id = req.body.chapter_id;
    const posted  = req.body.posted;
    var query = "insert into pages (" +
                "page_path,upload_time,author_text,next_page,book_id,chapter_id,posted)"  + " values " +
                "( " + page_path + "," + upload_time + "," + author_text + "," + next_page + "," + book_id + "," + chapter_id + "," + posted + ")"                 
    console.log(query);
    // connection.query("insert into profiles (id,firstname) values (" + id +  ",`" + firstname +"`)")
    connection.query(query)
    // if (error) throw error;
    //   res.send("Success")
  
},
  update: function(req, res) {
  var query = "update pages " +
              + " where id = " + id
  console.log(query);
  //  
  connection.query(query)
  // if (error) throw error;
  //   res.send("Success")

},
    remove: function(req, res) {
        const id = req.params.id; 
        console.log(req.params);
        var query = "Delete from Pages " +
                    "where id = " + id
        console.log(query); 
        connection.query(query);     
     }
 };

  
