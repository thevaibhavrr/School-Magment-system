// sir s bat krna ki vikas ko SMS ka frontend dede ky

const mongoose = require("mongoose")
const validator = require("validator")

const RegisterSchool = new mongoose.Schema({
  Schoolname: {
    type: String,
    required: [true, "Please enter School Name"],
  },
  City: {
    type: String,
    required: [true, "Please enter City Name"],
  },
  Address: {
    type: String,
    required: [true, "Please enter Address"],
  },
  OwnerName: {
    type: String,
    required: [true, "Please enter Owner Name"],
  },
  OwnerImage:[
    {
        publicI
    }
  ]
});