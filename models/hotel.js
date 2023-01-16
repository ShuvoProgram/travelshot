const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    location: {type: String, required: true},
    desc: {type: String, required: true},
    facility: {type: String, required: true},
    img: {type: String, required: true},
    price: {type: Number, required: true},
    review: [
        {
            reviewId: {type: String}
        }
    ]
},
{timestamps: true}
);

mongoose.model = {};
export default mongoose.model("Hotel", HotelSchema);
