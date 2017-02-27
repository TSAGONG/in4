import React, { Component } from 'react';
import Input from './components/Input';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor() {
  super();
  this.state= {
    artist: ''
  }
  this.getArtistInfo = this.getArtistInfo.bind(this);
}
/*
  this.getArtistInfo = this.getArtistInfo.bind(this);
  this.getArtistName = this.getArtist.bind(this);*/

  //componentDidMount() {
/*    axios.get('https://spotify-8066a.firebaseio.com/.json')
    .then((res) => {
      this.setState({
        artist: res.data.artist,
      })
    })
  }

 searchArtist(artist){
    axios.post('https://spotify-8066a.firebaseio.com/.json')
    .then((res) => {
      //console.log(res)
    })
  }*/
  getArtistInfo(artist) {
    axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
    }).then((res) => {
      console.log(res.data);
      this.setState({
        artistName: res.data.artists.items[0].name,
        genre: res.data.artists.items[0].genres[0],
        image: res.data.artists.items[0].images[0].url,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Input
          getArtistInfo={this.getArtistInfo}
        />
        <p className="App-intro">
        </p>
        <ul>
          <li>{this.state.artistName}</li>
          <li>{this.state.genre}</li>
          <li><img src={this.state.image} /></li>
        </ul>
      </div>
    );
  }
}


export default App;
