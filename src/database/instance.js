import {DB_NAME} from '../constant.js';
import mongoose from 'mongoose';

async function dbInstance() {
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
        console.log(` ${connectionInstance}`)
        console.log(`MongoDb server connected successfully!! DB:host : ${connectionInstance.connection.host}`);
    } catch (error) {
      console.error("Internal Server Error", error);
      process.exit(1);
    }
}
export {dbInstance};