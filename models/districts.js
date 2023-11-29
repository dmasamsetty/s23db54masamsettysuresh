const mongoose = require("mongoose")
const districtSchema = mongoose.Schema({
    district_name: {
        type: String,
        required: true,
        minlength: 0,    
        maxlength: 15,  
      },
    district_population: Number,
    district_direction: String,
    district_area:Number
})
module.exports = mongoose.model("districts",
districtSchema)