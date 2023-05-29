const SuperAdmin = require("../model/SuperAdmin/LoginSchema");
const TryCatch = require("../middelwear/TryCatch");

// careate user for super Admin
const RegisterUser = TryCatch(async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = await SuperAdmin.create({
    name,
    email,
    password,
    role,
  });
  res.json({ sucess: "user created succesfull", user: user });
});

// get all list of supe admin
const UsersList = TryCatch(async (req, res) => {
  const users = await SuperAdmin.find();
  res.json({ user: users });
});

// login super admin

const LoginUser = TryCatch(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ error: "Please enter email and password" });
  }

  const user = await SuperAdmin.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: "Invalid email" });
  }

  const passMatch = await user.comparePassword(password);
  if (!passMatch) {
    return res.status(404).json({ error: "Invalid password" });
  }

  res.json({ msg: "Login successful" });
});

module.exports = {
  RegisterUser,
  UsersList,
  LoginUser,
};
