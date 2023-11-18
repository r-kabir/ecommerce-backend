const emailValidation = require("../helpers/emailValidation")
const passwordValidation = require("../helpers/passwordValidation")
const User = require("../models/userSchema")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer")

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
            if(password){
                if(!passwordValidation(password)){
                    return res.send("6-12 characters, no space, one digit, one lowercase, one uppercase & one special character requirrd")
                }
            }
            bcrypt.hash(password, 8, async function(err, hash) {
                let user = new User({
                    name: name,
                    email: email,
                    password: hash
                })
                user.save()
                const transporter = nodemailer.createTransport({
                    service:"gmail",
                    auth:{
                        user:"kabir.mern2201@gmail.com",
                        pass:"zdsg dzpx nvir rjct"
                    }
                })
                const info = await transporter.sendMail({
                    from:"kabir.mern2201@gmail.com",
                    to:"taposkabir@yahoo.com",
                    subject:"Verify Your Email",
                    html:"<p><b>Hello</b>to myself</p>"
                })
                res.send(user)
            });
        }
    }else{
        res.send("Email Already Exists")
    }   
}


module.exports = registrationController