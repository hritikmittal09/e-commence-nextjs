import mongoose from "mongoose"
let Mongo_db_Url = "mongodb+srv://hritik:Hritik1234@cluster0.e9ya9.mongodb.net/hotel"
const ConnectDb = async ()=>{
    try {
       await mongoose.connect(Mongo_db_Url)
       console.log("Db connected successfully");
    } catch (error) {
        console.log("fail to connect");
    }

}
export default ConnectDb