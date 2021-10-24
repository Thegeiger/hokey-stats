module.exports = {
  update_player_command: (player_id, {number, name, lastname, position, is_capitain}) => `
    UPDATE players
    SET number=${number},name="${name}",lastname="${lastname}",position="${position}",is_capitain=${is_capitain}
    WHERE id = ${player_id};
  `,

  get_team_by_year_command: (year) => `
    SELECT * FROM teams
    WHERE teams.year = ${year};
  `,

  get_player_at_id_command: (id) => `
    SELECT * FROM players
    WHERE players.id = ${id};
  `,

  select_team_command: (year) => `
    SELECT * FROM teams
    INNER JOIN player_team ON teams.id = player_team.team_id
    INNER JOIN players ON player_team.player_id = players.id
    WHERE teams.year = ${year};
  `,

  insert_player_team_command: (player_id, team_id, id = "default") => `
    INSERT INTO player_team(id, player_id, team_id)
    VALUES(${id},${player_id},${team_id})
  `,

  insert_players_command: (number, name, lastname, position, is_capitain, id = "default") => `
    INSERT INTO players(id, number, name, lastname, position, is_capitain)
    VALUES(${id},${number},"${name}","${lastname}","${position}",${is_capitain})
  `,
  
  insert_teams_command: (coach, year, id = "default") => `
    INSERT INTO teams(id, coach, year)
    VALUES(${id},"${coach || "inconnu"}",${year})
  `
}