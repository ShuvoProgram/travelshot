import mongoose from "mongoose";

const connectDb = async () => {
     mongoose.connect(process.env.DB_URI);
    console.log("Database Connected")
}

export default connectDb;