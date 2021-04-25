import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select song</div>
  }
  return (
    <div>
      <h3>Song Detail</h3>
      <p>
        title : {song.title}
        <br />
        Detail: {song.duration}
      </p>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail);