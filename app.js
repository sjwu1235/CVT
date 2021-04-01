//extra pass to template for status rewatch julian for reauirement
//ejs specific syntax to grab data from submission
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose(); //to use database

//Creating the Express server
const app = express();

//Set the view engine to ejs
app.set("view engine", "ejs");

//creat the express router
const router=express.Router();

//serve static fields in express
//configuring middleware
app.use(express.static(path.join(__dirname,"public"))); //then e.g. this will work on http://localhost:3000/images/firefox-icon.png
app.use(express.urlencoded({ extended: false })); // use the middleware “express.urlencoded()” so that request.body retrieves the posted values

//connecting to the sqlite database
const db_name = path.join(__dirname, "data", "Vaccine.db");
console.log("database fullname: "+db_name);
const db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'Vaccine.db'");
});

//Creating the tracker table (userID, Name, surname, date, vaccine, place)
const sql_create = `CREATE TABLE IF NOT EXISTS tracker (
  tracker_ID INTEGER PRIMARY KEY AUTOINCREMENT,
  Name VARCHAR(100) NOT NULL,
  Surname VARCHAR(100) NOT NULL,
  date DATE NOT NULL,
  vaccine TEXT NOT NULL,
  place TEXT NOT NULL
);`;

db.run(sql_create, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful creation of the 'tracker' table");
  
  //Database seeding
  // use the identifier, ie: the 1 in the row inserted to prevent reinsertion of the seed over and over
  const sql_insert=`INSERT INTO tracker (tracker_ID, Name, Surname, date, vaccine, place) VALUES
  (1,'John','Doe','2020-01-01','Johnsons','Rondebosch');`;
  db.run(sql_insert,(err)=>{
    if (err){
      return console.error(err.message);
    }
    console.log("Successful creation of 1 users");
  });
});

//GET /
router.get("/", function (req, res) {
  const sql="SELECT * FROM tracker";
  db.all(sql, [],(err,rows)=>{
    if (err){
      return console.error(err.message);
    }
    console.log("rows - "+rows.length);
    //__dirname resolves to your project folder.
    res.render(__dirname+"/views/index.ejs",{
      status: "",
      users: rows,
    });
    
    //__dirname : It will resolve to your project folder.
  });
    //The sendfile method, on the other hand, simply sends a given file to the client, regardless of the type and contents of the file.
    //render allows processing of variables but requires use of a templating engine e.g. name
    //  res.sendFile(
    //    path.join(__dirname + "/views/index.html")
    //  );
});
  
router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});
//to edit grab data from the html form need to use router.post 
//"fname","sname","date","Vaxadmin","pvax"
router.post("/", function (req, res) {
  const user = [req.body.fname, req.body.sname,req.body.date,req.body.Vaxadmin,req.body.pvax];
  const sql = "INSERT INTO tracker (Name, Surname, date, vaccine, place) VALUES (?,?,?,?,?)";
  db.run(sql, user, (err) => {
    console.log("added");

    const sql="SELECT * FROM tracker";
    db.all(sql, [],(err,rows)=>{
      if (err){
        return console.error(err.message);
      }
      console.log("rows - "+rows.length);
      //__dirname resolves to your project folder.
      res.render(__dirname+"/views/index.ejs",{
        status: "",
        users: rows,
      });
    });
    
  });
});

//add the router
app.use("/", router);
app.listen(3000, ()=>{
  console.log("Running at Port 3000");
});