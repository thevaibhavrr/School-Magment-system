const experss = require("express");
const router = experss.Router();
const data = require("../../controller/roleController")


router.route("/createrole").post(data.RegisterRole)

module.exports = router