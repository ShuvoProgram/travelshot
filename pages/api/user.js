import connectDb from "../../lib/initDB";
import Kitten from "../../models/test";

export default async function get_Users(req, res){

    try {
        await connectDb();
        const test = await Kitten.create(req.body);
        res.json({test})
    } catch (error) {
        res.json({error})
    }

    // connectDb().catch(err => console.error(err))

    // const create = new Kitten({ name: "John Smith" });
    // create.save().then(() => {
    //     res.status(200).json(create)
    // })

    // res.status(200).json([
    //     {id: 1, name: "John Smith"}
    // ])
}