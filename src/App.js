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

      //grabs the artist id from the data
      const id = res.data.artists.items[0].id;

    axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`,
    }).then((response) => {
        //console.log(response.data);

    axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/artists/${id}/albums?album_type=album`,
    }).then((resAlbum) => {
        //console.log(resAlbum.data);
        const albumId = resAlbum.data.items[0].id;

    //axios({
     // method: 'GET',
      //url: `https://api.spotify.com/v1/albums/${albumId}/tracks?`
    //}).then((resTracks) => {
        //console.log(resTracks.data);

        this.setState({

          //artist and image
          artistName: res.data.artists.items[0].name,
          image: res.data.artists.items[0].images[2].url,


          //popular tracks and preview url
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
          track6: response.data.tracks[5].name,
          preview6: response.data.tracks[5].preview_url,
          track7: response.data.tracks[6].name,
          preview7: response.data.tracks[6].preview_url,
          track8: response.data.tracks[7].name,
          preview8: response.data.tracks[7].preview_url,
          track9: response.data.tracks[8].name,
          preview9: response.data.tracks[8].preview_url,
          track10: response.data.tracks[9].name,
          preview10: response.data.tracks[9].preview_url,


          //album art
          album1: resAlbum.data.items[0].images[1].url,
          album2: resAlbum.data.items[1].images[1].url,
          album3: resAlbum.data.items[2].images[1].url,
          album4: resAlbum.data.items[3].images[1].url,
          album5: resAlbum.data.items[4].images[1].url,
        });
    });
    });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>in4</h1>
        </div>
        <Input
          getArtistInfo={this.getArtistInfo}
        />

        <ul>
          <li><h2>{this.state.artistName}</h2></li>
          <li><img className='artistimg' src={this.state.image} /></li>
        </ul>

        <ul className = 'songPreview1'>
          <li><a href={this.state.preview1}>{this.state.track1}</a></li>
          <li><a href={this.state.preview2}>{this.state.track2}</a></li>
          <li><a href={this.state.preview3}>{this.state.track3}</a></li>
          <li><a href={this.state.preview4}>{this.state.track4}</a></li>
          <li><a href={this.state.preview5}>{this.state.track5}</a></li>
         </ul>
         <ul className = 'songPreview2'>
          <li><a href={this.state.preview6}>{this.state.track6}</a></li>
          <li><a href={this.state.preview7}>{this.state.track7}</a></li>
          <li><a href={this.state.preview8}>{this.state.track8}</a></li>
          <li><a href={this.state.preview9}>{this.state.track9}</a></li>
          <li><a href={this.state.preview10}>{this.state.track10}</a></li>
        </ul>

        <ul className = 'album'>
          <li><img src={this.state.album1} /></li>
          <li><img src={this.state.album2} /></li>
          <li><img src={this.state.album3} /></li>
          <li><img src={this.state.album4} /></li>
          <li><img src={this.state.album5} /></li>
        </ul>

      </div>
    );
  }
}


export default App;
