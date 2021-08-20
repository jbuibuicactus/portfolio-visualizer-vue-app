const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
  credentials: true
};

app.use(cors(corsOptions));
//app.use(cors())
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();
// Dev Setup Resync probably needed
/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
require("./app/routes/tutorial.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 7070;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});