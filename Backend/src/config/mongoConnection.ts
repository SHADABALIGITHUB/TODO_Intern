import mongoose from 'mongoose';
import {Mongo_Url} from "./environment"

//  mongo connection using url
const mongoConnection=async()=>{
    try{
        await mongoose.connect(Mongo_Url)
        console.log('Mongo Connected')
    }   catch (e){
        console.log('Error in Mongo Db Connection',e);
    }
}

export default mongoConnection;