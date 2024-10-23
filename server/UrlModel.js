import mongoose, { Schema } from "mongoose";

const urlSchema = new mongoose.Schema(
    {
        userId: {
          type: Number, 
        },
        shortUrl: {
            type: String,
            required: true, 
            unique: true
        },
        originalUrl: {
            type: String,
            required: true, 
        },
        visitHistory:[{timestamp:{type:Number}}]
    },
    { timestamps: true }
);

export const Url = mongoose.model("Url", urlSchema);