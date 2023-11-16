const emailValidation = require("../helpers/emailValidation")
const User = require("../models/userSchema")

let registrationController = (req,res)=>{
    let {name, email, password} = req.body
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
}


module.exports = registrationController