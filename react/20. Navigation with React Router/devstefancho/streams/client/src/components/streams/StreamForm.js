import React from "react";
import { Form, Field } from 'react-final-form';

const StreamForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  const renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    )
  }

  const formValidate = (formValues) => {
    const err = {};

    if (!formValues.title) {
      err.title = "Enter your title!";
    }

    if (!formValues.description) {
      err.description = "You must enter a description";
    }

    return err;
  }

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  }

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={formValidate}
    >
      {({ handleSubmit }) => (
        <form className="ui form error" onSubmit={handleSubmit}>
          <Field name="title" component={renderInput} label="Enter Title" />
          <Field name="description" component={renderInput} label="Enter Description" />
          <button className="ui button primary">Submit</button>
        </form>
      )}
    </Form>
  )
};


export default StreamForm;