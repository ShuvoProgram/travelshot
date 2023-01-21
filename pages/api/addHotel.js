import connectDB from "../../lib/connectDb";
import Rooms from "../../models/Rooms";

const handler = async (req, res) => {
    if(req.method == "POST") {
        for(let i = 0; i < req.body.length; i++){
            let room = new Rooms({
                user: req.body[i].user,
                title: req.body[i].title,
                slug: req.body[i].slug,
                location: req.body[i].location,
                description: req.body[i].description,
                facility: req.body[i].facility,
                img: req.body[i].img,
                price: req.body[i].price,
            })
            await room.save()
        }
        res.status(200).json({success: "success"})
    } else {
        res.status(404).json({error: "This method is not allowed"})
    }
}

export default connectDB(handler);