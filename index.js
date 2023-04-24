const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

const admin = require("firebase-admin");
const credentials = require("./key.json");
const GeoPoint = require("geopoint");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create", async (req, res) => {
  try {
    const id = req.body.id;
    const geoPoint = new admin.firestore.GeoPoint(
      req.body.location[0],
      req.body.location[1]
    );
    const carJson = {
      acceleration: req.body.acceleration,
      humidity: req.body.humidity,
      location: geoPoint,
      pressure: req.body.pressure,
      rotation: req.body.rotation,
      temperature: req.body.temperature,
      lastUpdate: new Date(),
    };
    const response = db.collection("cars").doc(id).set(carJson);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname + "/views/index.html"));
// });

const db = admin.firestore();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
