//Dependencies
const express = require("express");
const app = express();
app.use(express.json());
//Handling Get request for / URI
app.get("/", (req, res) => {
  res.send("Express App Running");
});

//Handling Get server time
app.get("/time", (req, res) => {
  const dateObject = new Date();
  let time = dateObject.getTime();
  res.send("Server time " + time.toString());
});

app.get("/sendValue", function (req, res) {
  const sensorReading = req.query.temp;
  if (sensorReading) {
    //UpdateDB(sensorReading)
    res.send("Sensor reading = " + sensorReading);
  } else {
    res.send("Temp query parameter is not set in request");
  }
});

app.post("/handleJSON", function (req, res) {
  console.log(req.body);
  const sensorReading = req.body.temp;
  if (sensorReading) {
    //UpdateDB(sensorReading)
    res.send("Sensor 1 reading = " + sensorReading);
  } else {
    res.send("Temp JSON parameter is not set in request");
  }
});

//Deploying the listener
const port = 8090;
app.listen(process.env.PORT || port, () =>
  console.log(`Express server listening on port
${port}`)
);
