const experss = require("express")
const router = experss.Router()
const data  = require("../../controller/SuperAdminController")

router.route("/register").post(data.RegisterUser);
router.route("/login").post(data.LoginUser);    
router.route("/AllsuperAdmin").get(data.UsersList);

module.exports = router;