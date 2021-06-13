## Redux-Form

### Field
- Field Component에 나만의 props를 넣게 되면, component props의 내부 props로 들어가게 된다. (나만의 props를 redux-form은 어떻게 다뤄야할지 모르기 때문임)
```javascript
renderInput({ input, customLabel }) {
  // input props는 기본으로 들어가게 되는것으로 onChange, onBlur 등등 redux-form에 의해 들어가게 됨
  return (
    <div>
      <label>{customLabel}</label>
      <input {...input} />
    </div>
  )
}
render() {
  return (
    <Field name="reducer에 들어가는 이름" component={this.renderInput} customLabel="이걸 어케 처리할까">
  )
}
```

### onSubmit, handleSubmit
```javascript
onSubmit={this.props.handleSubmit(this.onMyCustomSubmit)}
```
`reduxForm`으로 감싸게 되면 (connect와 같은 형태임) `this.props`에 `handleSubmit`이란게 기본으로 들어간다.
`handleSubmit`은 내부에서 `event.preventDefault`와 같은 처리를 모두 해준다.
따라서 사용자는 `this.onMyCustomSubmit(formValues)`에서 처리하면 된다.

### validate
- user가 Form(Field Component)와 interation을 하면 항상 invoke 되는 function
- `reduxForm({ validate: myValidate })` 형태로 넣는다.
- renderInput에 meta.error로 들어가게 된다, validate의 return된 object의 property 값이 Field의 name에 맞춰서 error를 넘기게 된다.

```javascript
class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      // touched 처음에 false이다가, 사용자가 form 클릭 후 form 외부를 클릭하면 true로 유지됨
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput({ input, label, meta }) {
    console.log(meta);
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput.bind(this)} label="Enter Title" />
        <Field name="description" component={this.renderInput.bind(this)} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
};

const formValidate = (formValues) => {
  const err = {};

  if (!formValues.title) {
    err.title = "Enter your title!";
  }

  if (!formValues.description) {
    err.description = "You must enter a description";
  }
  
  return err; // return 되는 object의 key값과 Field의 name을 매칭해서 meta를 넘긴다.
}

export default reduxForm({
  form: 'streamCreate',
  validate: formValidate
})(StreamCreate);
```