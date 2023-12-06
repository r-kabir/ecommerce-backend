const User = require("../models/userSchema")
const bcrypt = require('bcrypt');

let loginController = async (req,res)=>{
    let {email, password} = req.body
    let existingUser = await User.find({email:email})
    if(existingUser.length == 0){
        res.send({error:"Invalid Credential"})
    }else{
        bcrypt.compare(password, existingUser[0].password, function(err, result) {
            if(result){
                res.send({success:"Login Successful!"})
            }else{
                res.send({error:"Invalid Credential!"})
            }
        });
    }
}

module.exports = loginController