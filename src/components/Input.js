import React from 'react';
import axios from 'axios';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
          <input
            type = 'text'
            ref={(input) => { this.artist = input; }}
            placeholder= 'Artist name'
          />
          <button
           onClick={() => this.props.getArtistInfo(this.artist.value)}
          >Submit</button>
      </div>
      )
  }
}

export default Input;
