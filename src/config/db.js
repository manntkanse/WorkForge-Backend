import mongoose from "mongoose";
import "colors";

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(`MongoDB connection error: ${error.message}`.red);
    } else {
      console.error("Unknown MongoDB connection error", error);
    }
    throw error; // 🔑 IMPORTANT
  }
};

export default connectDB;
