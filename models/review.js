const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
},
    { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Review", ReviewSchema);
