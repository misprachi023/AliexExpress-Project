const express = require("express");
const connection = require("./db");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT



app.use(express.json());



app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, async ()=>{
    try {
        await connection
        console.log("server is running and  connected to db and port is ", port)
    } catch (error) {
        console.log(error)
        
    }
})