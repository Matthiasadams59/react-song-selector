import React, { Component } from 'react'
import { allSongs } from './songs'
import ListSongs from './ListSongs'

export default class SongFilter extends Component {
	constructor() {
		super()

		this.state = {
			songsFiltered: allSongs,
			filter: '',
			showResults: false
		}
	}

	render() {
		return (
			<div>
				<label htmlFor="songFilter">Select a song: </label>
				<input type="text" value={this.state.filter} onChange={this.updateFilter} id="songFilter"></input>
				{this.state.showResults ? <ListSongs selectSong={this.props.selectSong} songselection={this.state.songsFiltered} /> : null}
			</div>
		)
	}

	updateFilter = (e) => {
		const filterText = e.target.value
		this.setState({
			filter: filterText,
			showResults: filterText !== '',
			songsFiltered: allSongs.filter(t => t.includes(filterText))
		})
	}
}
