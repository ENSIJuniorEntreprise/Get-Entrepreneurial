const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CollabSchema = new Schema({
    partenaire   : {type:String,required:true},
    type : {type:String,required:true},
    website : {type:String,required:false},
    offer : {type:String,required:false},
    postuleForm : {type:String,required:false},
    img   : {type:String,required:true},


},{timestamps : true})


const Collab = mongoose.model('Collab',CollabSchema)
module.exports = Collab