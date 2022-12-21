const express = require('express');
const dotenv = require("dotenv");
dotenv.config();

const connectDatabase = require("./config/db");
//const req = require('express/lib/request');
const app = express();

connectDatabase();

app.get("/api/health",(req,res)=>{
    res.send({
        
        time: new Date(),
        server:"shuffle backend",
        status: "Active",
        
    });

});

app.get('/',(req,res)=>{
    res.send("Hello rajini");
});
app.use((req, res, next) =>
  res.status(404).send("You are looking for something that we not have!")
);

app.use((err, req, res, next) => res.status(500).send("Something went wrong!"));

const PORT = process.env.PORT || 3000;
const HOST = process.env.host || "localhost";

app.listen(PORT, ()=> {
    console.log(`Hi Rajini , this app is listening at http://${HOST}:${PORT}`);
});