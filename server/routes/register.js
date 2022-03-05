const express = require("express");

// usersRouter is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const usersRouter = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// Hacemos el post del login
usersRouter.route("/register").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    email: req.body.email,
    password: req.body.password,
    
  };
  db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});



module.exports = usersRouter;
