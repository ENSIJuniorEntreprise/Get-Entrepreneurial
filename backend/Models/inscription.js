const mongoose = require("mongoose")

const Schema = mongoose.Schema

const inscrptionSchema = new Schema({
    Nom   : {type:String,required:true},
    Prenom : {type:String,required:true},
    Email : {type:String,required:true},
    Phone : {type:String,required:true},
    Birthday:{type: Date , required:true},
    Genre : {type:String,required:true},
    Region : {type:String,required:true},
    Status: {type: String, required:true},
    Universite: {type: String, required:false},
    Classe: {type: Number, required:false},
    DomaineExpertise : {type: String, required:false},
    NiveauExperience: {type: String, required:false},
    Partage: {type: Boolean, required:true},

    CV: {type: String, required:false},
    

},{timestamps : true})


const Inscription = mongoose.model('inscription',inscrptionSchema)
module.exports = Inscription