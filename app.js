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

const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  const userName = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  console.log(userName, password);
  /*   try {
    const res = await fetch("http://localhost:8080", {
      method: "GET",
         headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }), 
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  } */

  /*   fetch("http://localhost:8080/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}); */

  const res = await fetch("http://localhost:8080/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, password }),
  });
});
