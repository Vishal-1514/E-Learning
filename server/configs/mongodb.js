import mongoose from "mongoose";

//Connect to the mongoDB database

const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=> console.log('database connected'))
    await mongoose.connect(`${process.env.MONGODB_URL}/lms2`)
}
export default connectDB