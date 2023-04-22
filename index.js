const express = require("express");
const PORT = process.env.PORT || 8090;
let app = express();
let fire = require("./fire");
let cors = require("cors");
let bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    "<h1>Firebase Cloud Firestore</h1><ul><li><p><b>GET /fetch</b></p></li><li><p><b>POST /add</b>  => {acceleration, humidity, location, pressure, rotation, temperature}</p></li></ul>"
  );
});

app.get("/fetch", (req, res) => {
  const db = fire.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });
  let wholeData = [];
  db.collection("cars")
    .orderBy(
      "acceleration",
      "humidity",
      "location",
      "pressure",
      "rotation",
      "temperature"
    )
    .get()
    .then((snapshot) => {
      snapshot.forEach((car) => {
        // console.log(doc.id, '=>', doc.data());
        // console.log(doc.data().name + doc.data().age);
        // console.log(doc.data());
        wholeData.push(car.data());
      });
      console.log(wholeData);
      res.send(wholeData);
    })
    .catch((error) => {
      console.log("Error!", error);
    });
});

app.post("/add", (req, res) => {
  const db = fire.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });
  db.collection("cars").add({
    acceleration: req.body.acceleration,
    humidity: req.body.humidity,
    location: req.body.location,
    pressure: req.body.pressure,
    rotation: req.body.rotation,
    temperature: req.body.temperature,
  });
  res.send({
    acceleration: req.body.acceleration,
    humidity: req.body.humidity,
    location: req.body.location,
    pressure: req.body.pressure,
    rotation: req.body.rotation,
    temperature: req.body.temperature,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
