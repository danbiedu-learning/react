import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions/index'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { deleteStream, id } = this.props;
    return (
      <React.Fragment>
        <div className="ui button negative" onClick={() => deleteStream(id)}>Delete</div>
        <Link to='/' className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    const { stream, id } = this.props;
    if (!stream) {
      return 'Are you sure you want to delete this title';
    }

    return `Are you sure you want to delete this title: ${stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      >
      </Modal>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
  id: ownProps.match.params.id,
})

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
