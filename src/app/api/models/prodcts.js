import { Schema, models ,model} from "mongoose";
const ProductSechma = new Schema({
    image :{
        type : String,
        required : true,

    } ,
    price :{
        type : Number,
        required : true,
    },
    title : {
        type : String,
        required : true,
    },
    dis : {
        type : String,
        required: true
    }
})
const product = models.product || model("product", ProductSechma)
export default  product