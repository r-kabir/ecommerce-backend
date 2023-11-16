const emailValidation = require("../helpers/emailValidation")

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
        res.send("Registration Done")
    }
}


module.exports = registrationController