const mongoose = require("mongoose");
const dotenv=require("dotenv")
dotenv.config()

const connection = mongoose.connect(process.env.MONGO_ATLAS_URL)

module.exports = connection 