const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Krokodil8151",
    database: "LogIn",
  },
});
const { Model } = require("objection");
Model.knex(knex);
class LogIn extends Model {
  static get tableName() {
    return "Users";
  }
}
app.use(bodyParser.json());
app.use(cors());
app.post("/", (request, response) => {
  const { userName, password } = request.body;
  LogIn.query()
    .insert({ userName, password })
    .then((res) => {
      response.json(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
app.listen(8080, "0.0.0.0", () => {
  app.listen(8080, "localhost", () => {
    console.log("Example app listening at http://localhost:8080");
  });
});
