const mongoose = require("mongoose");

const conn = "mongodb://localhost:27017/CRUD";

const Connnection = () => {
    mongoose.connect(conn, {

        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to mongoDb");
    }).catch((err) => {
        console.log(err);
    })
}


module.exports = Connnection;

