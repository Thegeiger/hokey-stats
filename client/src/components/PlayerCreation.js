import React from "react";

function PlayerCreation({ year, refreshPlayers }) {
  const [player, setPlayer] = React.useState({});

  return <div className="user-creation">
    <div className="w-form">
      <div id="email-form" name="email-form" data-name="Email Form" className="form">
        <label htmlFor="name">Nom</label>
        <input type="text" className="w-input" maxLength="256" name="name" data-name="Name" placeholder="" id="name"
          value={player.name} onChange={({ target }) => setPlayer({ ...player, name: target.value })} />
        <label htmlFor="lastname">Prenom</label>
        <input type="text" className="w-input" maxLength="256" name="lastname" data-name="lastname" placeholder="" id="lastname"
          value={player.lastname} onChange={({ target }) => setPlayer({ ...player, lastname: target.value })} />
        <label htmlFor="email-3">Numero</label>
        <input type="email" className="w-input" maxLength="256" name="email-3" data-name="Email 3" placeholder="" id="email-3"
          value={player.number} onChange={({ target }) => setPlayer({ ...player, number: target.value })} />
        <label htmlFor="email-3">Position</label>
        <input type="email" className="w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="" id="email-2"
          value={player.position} onChange={({ target }) => setPlayer({ ...player, position: target.value })} />
        <label className="w-checkbox">
          <input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" className="w-checkbox-input"
            value={player.is_capitain} onChange={_ => setPlayer({ ...player, is_capitain: !player.is_capitain })} />
          <span className="w-form-label">Capitaine</span>
        </label>
        <input type="submit" value="Submit" className="submit-button w-button" onClick={() => {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(player)
          };
          fetch(`/api/team/${year}`, requestOptions)
            .then(response => response.json())
            .then(player => refreshPlayers(player))
            .catch((data) => console.error(data))
        }} />
      </div>
      <div className="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div className="w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  </div>
}

export default PlayerCreation
