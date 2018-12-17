import React, { Component } from 'react'
//import { allSongs } from './songs'
import PropTypes from 'prop-types'
import ListSongs from './ListSongs'
import Axios from 'axios'

class SongFilter extends Component {
	constructor() {
		super()

		this.state = {
			//songsFiltered: allSongs,
			songsFiltered: [],
			filter: ''
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div className="bs-col-6-knockoff">
				<h2>Queen's Discography</h2>
				<p>Select your songs : </p>
				<input type="text" value={this.state.filter} onChange={this.updateFilter} id="songFilter" placeholder="Type a song title..."></input>
				<ListSongs selectSong={this.props.selectSong} songselection={this.state.songsFiltered} />
			</div>
		)
	}

	updateFilter = async (e) => {
		const filterText = e.target.value

		try {
			const axiosFiltered = await Axios.get("http://localhost:8081/"+filterText)
			this.setState({
				filter: filterText,
				songsFiltered: axiosFiltered.data ? axiosFiltered.data : []
			})
		} catch {
			this.setState({
				filter: filterText,
				songsFiltered: []
			})
		}
	}
}

SongFilter.propTypes = {
    selectSong: PropTypes.func.isRequired
}

export default SongFilter