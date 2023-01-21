import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    rooms: {
        type: [String]
    }
})