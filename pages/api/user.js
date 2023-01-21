import connectDB from "../../lib/connectDb"

const { default: User } = require("../../models/User")

const handler = async (req, res) => {
    let user = await User.find()

    res.status(200).json({user})
}

export default connectDB(handler);