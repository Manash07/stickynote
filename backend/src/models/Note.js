import mongoose from 'mongoose'

// 1. Create a schema
// 2. Create a model from that schema 

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },

     content:{
        type: String,
        required: true,
    },  
},

{timestamps: true} // mongodb by default will provide the created date and updated date

);

const Note = mongoose.model("Note", noteSchema)

export default Note

