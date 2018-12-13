import React, { Component } from 'react'

export default class SongsSelected extends Component {
	render() {
		return (
			<div className="bs-col-6-knockoff">
				<h2>Songs selected :</h2>
        		<ul>
					{this.renderSongs()}
				</ul>
				<button onClick={this.validate}>Validate</button>
			</div>
		)
	}

	renderSongs = () => {
		return this.props.songsSelected.map((song, index) => (
			<li key={index} onClick={this.props.selectSong} >
				{song}
			</li>
		))
	}

	validate = () => {
		if (this.props.songsSelected.length > 0) {
			let message = "You have selected the following songs:\n"
			for (let songIndex in this.props.songsSelected) {
				message += `${this.props.songsSelected[songIndex]}, `
			}
			message = message.substr(0, message.length - 2)
			message += "\n\nNice choice!"
			alert(message)
		} else {
			alert("You haven't selected any song for now! What a shame!")
		}
	}
}