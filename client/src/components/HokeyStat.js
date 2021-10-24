import HokeyList from './HokeyList';
import PlayerCreation from './PlayerCreation';
import React from "react";

const DEFAULT_YEAR = 2015

function YearPanel({year, setYear}) {
  return <div className="years">
    <div className="prev" onClick={()=>setYear(year - 1)}>&lt; Precedent</div>
    <div className="year">{year}</div>
    <div className="next" onClick={()=>setYear(year + 1)}>Suivant &gt;</div>
  </div>
}

function refreshPlayers(year, setPlayers) {
  fetch(`/api/team/${year}`)
    .then((res) => res.json())
    .then((teamPlayer) => setPlayers(teamPlayer))
}
function HokeyStat() {
  const [players, setPlayers] = React.useState([]);
  const [year, setYear] = React.useState(DEFAULT_YEAR);

  React.useEffect(() => {
    refreshPlayers(year, setPlayers)
  }, [year]);

  return <div className="hokey-stats">
    <div className="titre">Hokey Stats application !</div>
    <YearPanel year={year} setYear={setYear} />
    <HokeyList players={players}/>
    <PlayerCreation year={year} refreshPlayers={()=>refreshPlayers(year, setPlayers)}/>
  </div>
}

export default HokeyStat