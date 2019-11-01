import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';
const API_BASE_URL= "http://localhost:5000/api/players";

class Players extends React.Component {
  constructor () {
    super();
    this.state = {allPlayers: [],}
  }

  componentDidMount(props) {
    axios
    .get(`${API_BASE_URL}`)
    .then(res => {
      this.setState({ allPlayers: res.data })
    })
    .catch(err => console.error(err));
  }

  componentDidUpdate(prevProps, prevState) {
    // Should this ever happen?
  }

  render() {
    return (
//      <div><h2>Hello World!!</h2></div>
      <div className="players">
        {this.state.allPlayers.map(player => 
          (<PlayerCard player={player} key={player.id} />))}
      </div>
    );
  }

} // Class Players

export default Players;