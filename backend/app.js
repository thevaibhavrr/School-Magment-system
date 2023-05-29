const express = require ("express");
const app = express();
const SuperAdmin = require("./Routes/SuperAdmin/superAdminroutes")
const Role = require ("./Routes/role/roleroutes.js")

app.use(express.json());
app.use("/api/v1",SuperAdmin)
app.use("/api/v1", Role);

module.exports = app