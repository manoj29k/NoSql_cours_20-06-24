import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nom: {type: String , required: true},
    prenom: {type: String , required: true}
});

const userModel = new mongoose.model('users', userSchema);

export async function  createUser(nom, prenom) {
    const newUser = new userModel({nom, prenom})
    newUser.save();
    return newUser;
}


