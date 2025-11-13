
import mongoose from 'mongoose'
import { MONGO_DB_URL } from './serverConfig.js'

export default async function connectDB(){
    try{
        await mongoose.connect(MONGO_DB_URL);
        console.log("Connected to mongodb")
    }
    catch(error){
        console.log(error);
        console.log("failed to load mongodb");
    }
}



