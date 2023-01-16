const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    UserId: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    desc: { type: String, required: true },
},
    { timestamps: true }
);

mongoose.model = {};
export default mongoose.model("Hotel", HotelSchema);
