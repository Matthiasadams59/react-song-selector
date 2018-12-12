import React, { Component } from 'react';
import './App.css';
import SongFilter from './SongFilter';
import SongsSelected from './SongsSelected'

class App extends Component {
	constructor() {
		super()

		this.state = {
			songsSelected: []
		}

		this.handler = this.handler.bind(this)
	}

	render() {
		return (
			<div>
				<SongFilter selectSong={this.handler} />
				<SongsSelected songsSelected={this.state.songsSelected} selectSong={this.handler}/>
			</div>
		);
	}

	handler = (event) => {
		const song = event.target.innerHTML
		if (!this.state.songsSelected.includes(song)) {
			this.setState(prevState => ({
				songsSelected: [...prevState.songsSelected, song]
			}))
		} else {
			this.setState(prevState => ({
				songsSelected: prevState.songsSelected.filter(selectedSong => selectedSong !== song)
			}))
		}
	}
}

export default App;