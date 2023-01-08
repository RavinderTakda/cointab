const express =require("express")
require('dotenv').config()
const {connection, CointabModel} =require("./db")
const cors = require("cors")

const axios = require("axios")



const app =express()
app.use(express.json());
app.use(cors())





app.get("/",async(req,res)=>{
console.log('I am in ')
const datafor= await CointabModel.find()
res.send(datafor)


})






app.post("/cointabdata",async(req,ress)=>{
    console.log("Post")


 const datacointab = await axios.get("https://randomuser.me/api/?results=50").then((res)=>{

ress.send("Data added")
return res.data

}).catch((err)=>{
    console.log(err)
})




    try{
      
        const result = await CointabModel.insertMany(datacointab.results);
    
    }catch(err){
   console.log(err)
     
    }
})





app.delete("/deletedata",async(req,res)=>{
   
    console.log("Delete")
   
 

       try{
       await CointabModel.deleteMany()
       res.send("Delete")
         
       }catch(err){
      console.log(err)
        
       }
   })







app.listen(process.env.PORT,async()=>{
    
    try{
        await connection
        console.log("Connected to DB")
    }catch(err){
        console.log("Error while connecting to DB")
        console.log(err)
    }

    console.log(`Server is running at Port ${process.env.PORT}`)


})