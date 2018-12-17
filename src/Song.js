import React from 'react'
import PropTypes from 'prop-types'

const Song = (props) =>
    <li onClick={props.selectSong} >
        {props.song}
    </li>

Song.propTypes = {
    selectSong: PropTypes.func.isRequired,
    song: PropTypes.string.isRequired
}

export default Song
