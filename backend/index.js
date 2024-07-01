const express = require("express");
const cors = require('cors');
const sql = require('mysql');
const Connnection = require('./DB');
// const router = require('./Routes/Routes');
const TextSchema = require('./Models/Text');


const app = express();

Connnection();
app.use(express.json());
app.use(cors());


const db = sql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "",

});

app.post('/create', (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const nationality = req.body.nationality;
  const salary = req.body.salary;

  db.query(
    "INSERT INTO employees (name, age, country, nationality, salary) VALUES (?,?,?,?,?)",
    [name, age, country, nationality, salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );

});





app.post("/save", async (req, res) => {

  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const nationality = req.body.nationality;
  const salary = req.body.salary;

  const text = new TextSchema({ name: name, age: age, country: country, nationality: nationality, salary: salary });

  try {
    await text.save();
    res.send("data is inserted");
  } catch (error) {
    console.log(error);
  }




})





app.listen(3001, () => {
  console.log("Server is running on port 3001");
})
