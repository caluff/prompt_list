import * as mongoose from "mongoose";

let isConnected = false
export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected){
    console.log('MongoDB is already connected')
    return;
  }
  try{
    await mongoose.connect(process.env.MONGODB_URI+'',{
      dbName:"share_prompt",
      //   Bing dice que despues de 6.0.0 de la version de mongose,
      //   no hace falta esos parametros 🤔
      // useNewUrlParser: true,
      // useUnifiedTopology: true
    })
    isConnected=true;
    console.log("MongoDB connected")
  }catch(error){
    console.log(error);
  }
}