import Player from './Player';

function HokeyListHeader() {
  return <div className="header">
    <div className="number">
      <div className="value">Numéro</div>
    </div>
    <div className="name">
      <div className="value">Nom du joueur</div>
    </div>
    <div className="position">
      <div className="value">Position</div>
    </div>
    <div className="is_capitain">
      <div className="value">Capiaine</div>
    </div>
  </div>
}

function HokeyList({players}) {
  return <div className="hokey-list">
    <HokeyListHeader />
    {players && players.map(((player, key) => <Player key={key} {...player}/>))}
  </div>
}

export default HokeyList