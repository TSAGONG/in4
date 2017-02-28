import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div id = 'input'>
          <input
            className= 'search'
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

