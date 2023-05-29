const app = require("./app");
const dotenv = require("dotenv");
const Database = require("./config/database");
// for config file
require("dotenv").config();
dotenv.config({ path: "./config/config.env" });
console.log(process.env.PORT);
// databasr connection
Database();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

