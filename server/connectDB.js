import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const mongoDBInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log("🚀MongoDB connected successfully !!!");
  } catch (error) {
    console.error("Mongodb connection failed!!!", error);
    process.exit(1);
  }
};

export default connectdb;
