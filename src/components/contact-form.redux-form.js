// src/components/contact-form

import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

class ContactForm extends Component {

  constructor(props) {
    super(props)
    initialValues.name = this.props.contact.name
    initialValues.phone = this.props.contact.phone
    initialValues.email = this.props.contact.email
  }
  renderField (field) { 
    let className = ''
    let message = ''
    if(field.meta.touched && field.meta.error) { 
      className = 'has-danger'
      message = field.meta.error.message
    }
    console.log("render field")
    console.log(field)
    return <Form.Field className={className}>
      <label>{field.label}</label>
      <input {...field.input} placeholder={field.label} type={field.type} />
      <div className={className}>{message}</div>
    </Form.Field>
  }

  render() {
    const { handleSubmit, pristine, submitting, loading } = this.props;
    const contact = this.props.contact
    console.log("contact form render")
    console.log(this.props)

    return (
          <Form onSubmit={handleSubmit} loading={loading}>
            <Field name="name.first" type="text" component={this.renderField} label="First Name" />
            <Field name="name.last" type="text" component={this.renderField} label="Last Name" />
            <Field name="phone" type="text" component={this.renderField} label="Phone" />
            <Field name="email" type="text" component={this.renderField} label="Email" />
            <Button className="ui basic button green" type='submit' disabled={pristine || submitting}>{this.props.update ? "Update" : "Create"}</Button>
            <Link to="/" type="cancel" className="ui basic button red" >Cancel</Link>
          </Form>
    )
  }
}

function validate(values) {
  let errors = { name: {first:"", last:""}, phone: "", email: ""}
  if(!values.name || !values.name.first)
  {
    errors.name.first = { message: "First name is a required field" }
  }
  if(!values.phone)
  {
    errors.phone = { message: "Phone is a required field" }
  }
  if(!values.email)
  {
    errors.email = { message: "Email is a required field" }
  }
  return errors
}

const initialValues = {
  name: {first:"", last: ""},
  phone: "",
  email: ""
}

export default reduxForm({
  form: 'Contact',
  validate,
  initialValues
})(ContactForm);