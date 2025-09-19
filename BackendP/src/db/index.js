import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try {
       const connectionInstance= mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(connectionInstance);
   
        console.log(`\n MongoDb connected !! DB:HOST:${(await connectionInstance).connection.host}`);
    } catch (error) {
        console.log("MongoDb connection failed",error);
        process.exit(1);
        
    }
}

export  default connectDB;