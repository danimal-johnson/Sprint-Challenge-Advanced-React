import React from 'react';

const PlayerCard = (props) => {

  return (
    <div className="player-card">
      <h2>{props.player.name}</h2>
      <h3>{props.player.country}</h3>
      <h3>Searches: {props.player.searches}</h3>
    </div>
  )
}

export default PlayerCard;