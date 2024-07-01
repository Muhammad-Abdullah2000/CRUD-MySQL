const Text = require("../Models/Text");

module.exports.getTodo = async(req,res) =>{
    const todo = await Text.find();
    res.send(todo);
}

module.exports.saveTodo = async(req,res) =>{

   const {name, age, country, phoneNo, salary} = req.body;

     Text.create({name, age, country, phoneNo, salary}).then(()=>{
        res.status(200).json({
            success: true,
            message: "Added Successfully",
        })
       
     })
  
}