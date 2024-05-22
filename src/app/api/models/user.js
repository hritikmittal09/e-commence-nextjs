import mongoose, { Schema, models ,model} from "mongoose";
const personSchema = new Schema({
    
    
    name :{
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique :true
        
    },
    password : {
        type : String,
        required: true
    }
})
mongoose.models = {}
//const person =   model("user", personSchema)
export default  model("user", personSchema)