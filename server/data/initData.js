const {db_connection, handle_db_error} = require('./connection');
const data = require(`${__dirname}/../../consignes/data`)
const {addTeam, addPlayer} = require("./teams")
const fs = require('fs')

const schema = () => fs.readFileSync(`${__dirname}/../../consignes/schema.sql`).toString()

function initData() {
  db_connection.query(schema(), handle_db_error);
}

// Team example : 
//{
//  id: 50,
//  coach: '',
//  year: 2010,
//  players: [
//    {
//      id: 1686,
//      number: 40,
//      name: 'Roman',
//      lastname: 'Hamrlik',
//      position: 'Defenseman',
//      is_capitain: false
//    }
//  ]
//}
function contactTeams() {
  let teamsDict = data.reduce((acc, team)=> {
    acc[team.id] = team
    return acc
  }, {})
  return Object.keys(teamsDict).map((k)=>teamsDict[k])
}

function loadTeams() {
  contactTeams().forEach((team)=>{
    addTeam(team)
    team.players.forEach((player)=>{
      addPlayer(team.id, player)
    })
  })
}

function initDataBase() {
  setTimeout(()=>{
    initData()
    loadTeams()
  }, 500)
}

initDataBase()