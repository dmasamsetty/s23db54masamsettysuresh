const mongoose = require("mongoose")
const districtSchema = mongoose.Schema({
    district_name: String,
    district_population: Number,
    district_direction: String,
    district_area:Number
})
module.exports = mongoose.model("districts",
districtSchema)