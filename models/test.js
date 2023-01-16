// import mongoose from "mongoose";
import mongoose from "mongoose";

const KittySchema = new mongoose.Schema({
    name: String
});

// model = {};

const Kitten = mongoose.models.kitten || mongoose.model('kitten',KittySchema);

export default Kitten;