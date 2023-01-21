const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
   title: {
    type: String,
    required: true
   },
   city: {
    type: String,
    required: true
   },
   desc: {
    type: String,
    required: true
   },
   facility: {
    type: [String]
   },
   photos: {
    type: [String]
   }
    
},
    { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Room", hotelSchema);