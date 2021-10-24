const {db_connection, handle_db_error} = require('./connection');
const {
  update_player_command,
  select_team_command,
  insert_player_team_command,
  insert_players_command,
  insert_teams_command,
  get_team_by_year_command,
  get_player_at_id_command
} = require("./command")

function update_player(player_id, player, callback) {
  db_connection.query(update_player_command(player_id, player), (err, _)=>{
    if (err) throw err
    get_player(player_id, callback)
  })
}

function get_player(id, callback) {
  return db_connection.query(get_player_at_id_command(id), callback)
}

function get_team(year, callback) {
  console.log(year)
  return db_connection.query(select_team_command(year), callback)
}

async function addTeam({id, coach, year}) {
  db_connection.query(
    insert_teams_command(coach, year, id),
    handle_db_error
  )
}

async function addPlayer(team_id, player) {
  db_connection.query(
    insert_player_team_command(player.id, team_id),
    handle_db_error
  )
  db_connection.query(
    insert_players_command(player.number, player.name, player.lastname, player.position, player.is_capitain, player.id),
    handle_db_error
  )
}

function addPlayer_to_year({number, name, lastname, position, is_capitain}, year, callback) {
  db_connection.query(get_team_by_year_command(year), (err, team)=>{
    if (err) throw err
    db_connection.query(insert_players_command(number, name, lastname, position, is_capitain), (err, player) =>{
      if (err) throw err
      db_connection.query(insert_player_team_command(player.insertId, team[0].id), handle_db_error)
      get_player(player.insertId, callback)
    })
  })
}

module.exports = {
  addPlayer,
  addPlayer_to_year,
  addTeam,
  update_player,
  get_team,
}