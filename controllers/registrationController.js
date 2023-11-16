const emailValidation = require("../helpers/emailValidation")
const User = require("../models/userSchema")

let registrationController = async (req,res)=>{
    let {name, email, password} = req.body
    let existingUser = await User.find({email:email})
    if(existingUser.length == 0){
        if(!name){
            res.send("Enter Name")
        }else if(!email){
            res.send("Enter Email")
        }else if(!password){
            res.send("Enter Password")
        }else{
            if(email){
                if(!emailValidation(email)){
                    return res.send("Invalid Email")
                }
            }
            let user = new User({
                name: name,
                email: email,
                password: password
    
            })
            user.save()
    
            res.send(user)
        }
    }else{
        res.send("Email Already Exists")
    }   
}


module.exports = registrationController