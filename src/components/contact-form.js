// src/components/contact-form

import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function TextField({name, type, label, defaultValue, error, onChange })
{
  return (
    <Form.Field>
      <label>{label}</label>
      <Input name={name} placeholder={label} type={type} 
        onChange = {onChange}
        defaultValue = {defaultValue} />
        <span className="error">{error ? error.message : ""}</span>
    </Form.Field>
  )
}
class ContactForm extends Component {

  constructor(props)
  {
    super(props);
    let contact = this.props.contact

    this.state = {
      "name.first": contact.name.first,
      "name.last": contact.name.last,
      phone: contact.phone,
      email: contact.email,
      create: contact._id === undefined
    };
  }
  
  changeEventHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    let tmpContact = {
      name: {
        first: this.state["name.first"],
        last: this.state["name.last"]
      },
      phone: this.state.phone,
      email: this.state.email
    }
    this.props.onSubmit(tmpContact);
  }

  render() {

    const errors = this.props.errors
    const firstNameError = errors && errors.fields["name.first"]
    const phoneError = errors && errors.fields.phone
    const emailError = errors && errors.fields.email
    
    return (
      <Form className="ui form" onSubmit = {this.onSubmitHandler}>
        <TextField name="name.first" label="First Name" defaultValue={this.state["name.first"]} 
                  error= {firstNameError} onChange={this.changeEventHandler} />
        <TextField name="name.last" label="Last Name" defaultValue={this.state["name.last"]} 
                  onChange={this.changeEventHandler} />
        <TextField name="phone" label="Phone number" defaultValue={this.state.phone} 
                  error= {phoneError} onChange={this.changeEventHandler} />
        <TextField name="email" label="Email" defaultValue={this.state.email} 
                  error= {emailError} onChange={this.changeEventHandler} />
        <Button>{this.state.create ? "Create" : "Update"}</Button>
      </Form>    
    )
  }
}

export default ContactForm
