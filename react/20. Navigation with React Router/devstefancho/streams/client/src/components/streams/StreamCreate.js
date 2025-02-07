import React from "react";
import { connect } from 'react-redux';

import {
  createStream,
} from '../../actions';
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <StreamForm onSubmit={this.onSubmit} />
    )
  }
};

export default connect(null, { createStream })(StreamCreate);