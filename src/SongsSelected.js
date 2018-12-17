import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Song from './Song'
import validate_helper from "./helpers/validate_helper"


class SongsSelected extends Component {
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
			<Song  song = {song} key = {index} selectSong = {this.props.selectSong} />
		))
	}

	validate = () => {
		validate_helper(this.props.songsSelected)
	}
}

SongsSelected.propTypes = {
	songsSelected: PropTypes.array.isRequired,
	selectSong: PropTypes.func.isRequired
}

export default SongsSelected