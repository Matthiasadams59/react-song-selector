import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Song from './Song'

class ListSongs extends Component {

    render() {
        return (
            <ul>
                {this.renderSongs()}
            </ul>
        )
    }

    renderSongs = () => {
        return this.props.songselection.map((song, index) => (
            <Song song = {song} key = {index} selectSong = {this.props.selectSong} />

        ))
    }
}

ListSongs.propTypes = {
    songselection: PropTypes.array.isRequired,
    selectSong: PropTypes.func.isRequired,
}

export default ListSongs