import mongoose from "mongoose";

const connectdb = async () => {
  // try {
  //   const mongoDBInstance = await mongoose.connect(process.env.MONGODB_URI);
  //   console.log("🚀MongoDB connected successfully !!!");
  // } catch (error) {
  //   console.error("Mongodb connection failed!!!", error);
  //   process.exit(1);
  // }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectdb;
