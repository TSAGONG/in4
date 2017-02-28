import React, { Component } from 'react';
import Input from './components/Input';
import axios from 'axios';
import './App.css';

class App extends Component {

constructor() {
  super();
  this.state= {
    artist: ''
  }

  this.getArtistInfo = this.getArtistInfo.bind(this);

}

  getArtistInfo(artist) {

    axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
    }).then((res) => {

      const id = res.data.artists.items[0].id;

    axios({
        method: 'GET',
        url: `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`,
    }).then((response) => {
        console.log(response.data);

        this.setState({

          artistName: res.data.artists.items[0].name,
          image: res.data.artists.items[0].images[2].url,
          track1: response.data.tracks[0].name,
          preview1: response.data.tracks[0].preview_url,
          track2: response.data.tracks[1].name,
          preview2: response.data.tracks[1].preview_url,
          track3: response.data.tracks[2].name,
          preview3: response.data.tracks[2].preview_url,
          track4: response.data.tracks[3].name,
          preview4: response.data.tracks[3].preview_url,
          track5: response.data.tracks[4].name,
          preview5: response.data.tracks[4].preview_url,
        })
      });
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>in4</h2>
        </div>
        <Input
          getArtistInfo={this.getArtistInfo}
        />
        <ul className = 'artistinfo'>
          <li>{this.state.artistName}</li>
          <li><img src={this.state.image} /></li>
          <li><a href={this.state.preview1}>{this.state.track1}</a></li>
          <li><a href={this.state.preview2}>{this.state.track2}</a></li>
          <li><a href={this.state.preview3}>{this.state.track3}</a></li>
          <li><a href={this.state.preview4}>{this.state.track4}</a></li>
          <li><a href={this.state.preview5}>{this.state.track5}</a></li>
        </ul>
      </div>
    );
  }
}


export default App;
