const mongoose =  require("mongoose");

const TextSchema = new mongoose.Schema({
    name:{
        type: String,
        
    },
    age:{
        type: Number,
        
    },
    country:{
        type: String,
        
    },
    nationality:{
        type: Number,
        
    },
    salary:{
        type: Number,
        
    }

})

module.exports = mongoose.model("Text", TextSchema)