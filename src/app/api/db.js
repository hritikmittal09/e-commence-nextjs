import mongoose from "mongoose"
let Mongo_db_Url = process.env.CONNECTION_DB 
const ConnectDb = async ()=>{
    try {
       await mongoose.connect(Mongo_db_Url)
       console.log("Db connected successfully");
    } catch (error) {
        console.log("fail to connect");
    }

}
export default ConnectDb
