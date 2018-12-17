import React from 'react'
import PropTypes from 'prop-types';

const Song = (props) =>
    <li key={props.index} onClick={props.selectSong} >
        {props.song}
    </li>

Song.propTypes = {
    index: PropTypes.number.isRequired,
    selectSong: PropTypes.func.isRequired,
    song: PropTypes.string.isRequired
}

export default Song;
