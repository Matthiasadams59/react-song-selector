import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectSong from './SelectSong';
import SongsSelected from './SongsSelected'

class App extends Component {
  constructor() {
    super()

    this.state = {
      songsSelected: []
    }
  }

  render() {
    return (
      <div>
        <SelectSong/>
        <SongsSelected/>
      </div>
    );
  }
}

export default App;