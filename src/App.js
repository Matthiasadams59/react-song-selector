import React, { Component } from 'react';
import './App.css';
import SongFilter from './SongFilter';
import SongsSelected from './SongsSelected'
import Bites_the_dust from './Bites_the_dust.mp3'
import thank_you from './thank_you.m4a'

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
			<div className="bs-container-knockoff">
				<div className="bs-row-knockoff">
					<SongFilter selectSong={this.handler} />
					<SongsSelected songsSelected={this.state.songsSelected} selectSong={this.handler} />
				</div>
			</div>
		);
		
	}

	handler = (event) => {
		const song = event.target.innerHTML
		if (!this.state.songsSelected.includes(song)) {
			this.setState(prevState => ({
				songsSelected: [...prevState.songsSelected, song]
			}))
			new Audio(thank_you).play();
		} else {
			this.setState(prevState => ({
				songsSelected: prevState.songsSelected.filter(selectedSong => selectedSong !== song)
			}))
			new Audio(Bites_the_dust).play();
		}
	}

}

export default App;