import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({path:'./.env'});


connectDB();







































































/*  APPROACH 1 FOR DB CONNECTION AND SERVER START
USING IFFE FUNCTION ->()() ISEE IFFE BOLTE HAIN(IMMEDIATELY INVOKED FUNCTION EXPRESSION)


(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (err) => {
            console.log("Error in DB connection", err);
            throw err;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error in DB connection",error);
        throw error;
    
    }
})()
    */