import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div id = 'input'>
          <input
            type = 'text'
            ref={(input) => { this.artist = input; }}
            placeholder= 'Artist name'
          />
          <button
            className="btn btn-primary"
            onClick={() => this.props.getArtistInfo(this.artist.value)}
          >Submit</button>
      </div>
      )
  }
}

export default Input;
