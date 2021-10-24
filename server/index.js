const express = require("express");
const bodyParser = require('body-parser')
const teams = require("./data/teams")

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.get("/api/team/:year", (req, res) => {
  const year = req.params.year;
  teams.get_team(year, (err, result)=>{
    if (err)
      throw err
    res.status(200).json(result)
  })
});

app.post("/api/team/:year", (req, res) => {
  teams.addPlayer_to_year(req.body, req.params.year, (err, result)=>{
    if (err)
      throw err
    res.status(201).json(result[0])
  })
});

app.put("/api/player/:id/captain", (req, res) => {
  teams.update_player(req.params.id, req.body, (err, result)=>{
    if (err)
      throw err
    res.status(200).json(result[0])
  })
});

// I'm a teapot :)
app.post("/coffee", (req, res) => {
  res.sendStatus(418)
});

app.listen(PORT, () => {
  console.info(`[Info] Hokey-Stats App started on ${PORT}`);
});
