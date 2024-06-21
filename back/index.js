import express from 'express'
import mongoose from 'mongoose'
import {createUser} from "./database/users.js"



const MONGODB_URL = "mongodb://127.0.0.1:27017/roulette-russe"


const app = express()
const port = 3000

app.use(express.json())
app.listen(port, () => {
  console.log(`BackEnd running on http://localhost:${port}`)


  mongoose.connect(MONGODB_URL).then(() => {
    console.log("connecté a mongodb");
  }).catch((err) => {
    console.log("pas connecté");
    console.log(err);
  });


})



app.post("/api/users", async (req, res) => {
  const {nom, prenom} = req.body
  console.log(nom, prenom);
  if(nom === "" || prenom === ""){
    return res.status(400).json({message: "Le nom et le prenom sont obligatoires"})
  }
  const newUser = await createUser(nom, prenom)


  return res.json({message:"user addeing"})

  
})

