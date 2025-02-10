const express = require('express');
const { resolve } = require('path');
const mongoose =require('mongoose');
const userSchema = require('./schema');
const app = express();
require('dotenv').config();

const port = 3010;
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to Database')
}).catch(err=>{console.log(err)})

app.use(express.static('static'));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.post('/api/users',async(req,res)=>{
  try{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
      return res.status(400).json({message:"All fields are required"})
    }

    const emailexist= await userSchema.findOne({email});
    if(emailexist)
    {
      return res.status(400).json({message:"Email already exists"})
    }
    const user=new userSchema({name,email,password});
    await user.save();
    console.log("user created succesfully")
    return res.status(201).json({message:" User created successfully"})
  }
  catch(err){
      if(err){
        console.log(err);
        return res.status(500).json({message:"Internal Server Error"})
      }
   }
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});