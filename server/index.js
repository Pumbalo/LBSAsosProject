// För att starta, skriv 'node index.js'

// Importerar Express, MySQL och Cors som används inom databaser.
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Sessions
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// Kryptering/Dekryptering
const bcrypt = require("bcrypt");

// Saltrounds är en faktor som kontrollerar hur lång tid de ska ta att kalkyrera en BCrypt hash.
const saltRounds = 10;

// Skapar en instance för Express
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// Detta parsar all data som skickas från frontend.
app.use(express.json());

// Skapar en connection till min databas.
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "asosDB",
});

// Register sida på port 3001. Data skickas till localhost:3001 och tas upp här.
app.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const phone = req.body.phone;
  const password = req.body.password;
  const email = req.body.email;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    db.query(
      "INSERT INTO `accounts`(`firstName`, `lastName`, `username`, `password`, `email`, `phone`) VALUES (?,?,?,?,?,?)",
      [firstName, lastName, username, hash, email, phone],
      (err, result) => {
        console.log(err);
        console.log(result);
      }
    );
  });
});

// Login sida på port 3001. Data skickas till localhost:3001 och tas upp här.
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

// Login sida på port 3001. Data skickas till localhost:3001 och tas upp här.
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let sql = `SELECT * FROM accounts WHERE email="${email}"`;
  db.query(sql, (err, result) => {
    try {
      bcrypt.compare(password, result[0].password, (err, compResult) => {
        if (err) throw err;
        if (compResult) {
          req.session.user = result;
          res.send(compResult);
        } else if (!compResult) {
          res.send({ message: "Incorrect Password or Email!" });
        }
      });
    } catch (err) {
      res.send({ message: "Email does not exist!" });
    }
  });
});

// Express ska köras på port 3001.
app.listen(3001, () => {
  console.log("Running server!");
});
