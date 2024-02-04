const express = require("express");
const bcrypt = require("bcrypt");
const RegisterModel= require("../models/register");

const RegisterRouter=express.Router();

RegisterRouter.post("/register", async (req, res) => {
    try {
        const {username, email}= req.body
        const user= await RegisterModel.findOne({email})
        if(!user){
           
            bcrypt.hash(password, 5, async(err, hash)=>{
                if(hash){
                    const newUser= new RegisterModel({email, password:hash, username})
                    await newUser.save()
                    res.status(200).send({msg:"user has been registered"})
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send({msg:"user already exists"})
        }
       } catch (error) {
        res.send("something went wrong")
       }
    }) 
    


