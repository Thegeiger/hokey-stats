import React from "react";

function Player({ id, number, name, lastname, position, is_capitain }) {
  const [capitain, setCapitain] = React.useState(is_capitain);

  return <div className="player">
    <div className="number">
      <div className="icon"></div>
      <div className="value">{number}</div>
    </div>
    <div className="name">
      <div className="icon"></div>
      <div className="value">{name} {lastname}</div>
    </div>
    <div className="position">
      <div className="icon"></div>
      <div className="value">{position}</div>
    </div>
    <div className="is_capitain">
      <div className="icon capitain" style={{ color: (capitain ? "red" : "black") }} onClick={() => {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ number, name, lastname, position, is_capitain: !capitain })
        };
        fetch(`/api/player/${id}/captain`, requestOptions)
          .then(response => response.json())
          .then(({is_capitain}) => {
            setCapitain(is_capitain)
          })
          .catch((data) => console.error(data))
      }}></div>
    </div>
  </div>
}

export default Player