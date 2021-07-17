import React from "react";
import { connect } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.flvPlayer.destroy();
  }

  buildPlayer() {
    if (this.flvPlayer || !this.props.stream) {
      return;
    }

    console.log(this.videoRef)

    const { id } = this.props.stream;
    this.flvPlayer = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${id}.flv`
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }
  
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;
    return (
      <React.Fragment>
        <video ref={this.videoRef} style={{ width: '100%' }} controls/>
        <h1>{title}</h1>
        <h4>{description}</h4>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);
