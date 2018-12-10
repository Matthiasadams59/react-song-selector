import React, { Component } from 'react'
import {allSongs} from './songs'
import ListSongs from './ListSongs'

export default class SelectSong extends Component {
    constructor() {
        super()

        //console.log(allSongs)
        this.state = {
            songsFiltered: allSongs,
            filter: ''
        }
    }

  render() {
    return (
      <div>
        <label for="songFilter">Select a song :</label> 
        <input type="text" value={this.state.filter} onChange={this.updateFilter} id="songFilter"></input>
        <ListSongs songselection={this.state.songsFiltered}/>
      </div>
    )
  }

  updateFilter = (e) => {
      this.setState({filter : e.target.value, 
        songsFiltered : allSongs.filter(t => t.includes(e.target.value))
    })
  }

}
