import React, { Component } from 'react'

export default class ListSongs extends Component {

    render() {
        return (
            <ul>
                {this.renderSongs()}
            </ul>
        )
    }

    renderSongs = () => {
        return this.props.songselection.map((song, index) => (
            <li key={index} onClick={this.props.selectSong} >
                {song}
            </li>

        ))
    }
}