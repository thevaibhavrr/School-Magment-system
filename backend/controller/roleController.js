const Role = require("../model/role/roleSchema")
const TryCatch = require("../middelwear/TryCatch");

// careate user for super Admin
const RegisterRole = TryCatch(async (req, res) => {
  const { name } = req.body;
  const user = await Role.create({
    name,
  });
  res.json({ sucess: "user created succesfull", user: user });
});

module.exports= {
    RegisterRole
}