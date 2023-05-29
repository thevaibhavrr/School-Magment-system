const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcryptJS = require("bcrypt");
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    // select: false,
  },
  role:{
    type:String,
  }
});
// password hashing
adminSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    next()
  }
  this.password = await bcryptJS.hash(this.password , 10)
})

// JWT token
adminSchema.methods.getJWTToken = function(){
  return jwt.sign({id: this._id},process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRE
  } )
}

// compare password
adminSchema.methods.comparePassword = async function (enterpassword) {
  return await bcryptJS.compare(enterpassword, this.password);
};

module.exports = mongoose.model("SuperAdminLogin", adminSchema);