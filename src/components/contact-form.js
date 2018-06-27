// src/components/contact-form

import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class ContactForm extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      "name.first": "",
      "name.last": "" ,
      phone: "",
      email: ""
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
      <form className="ui form" onSubmit = {this.onSubmitHandler}
        fields = {{"name.first": 'empty', "name.last": 'empty'}}>
        <div className="field">
          <label>First Name</label>
          <div className="two fields">
          <Input name="name.first" placeholder="First Name (Brajesh)" type="text" 
            onChange = {this.changeEventHandler} 
            defaultValue={this.state["name.first"]}
            error = {firstNameError}
            />
          <Input name="name.last" placeholder="Last Name (Jaishwal)" type="text"              
            onChange = {this.changeEventHandler} 
            defaultValue={this.state["name.last"]}/>
          </div>
        </div>
        <div className="field">
          <label>Phone</label>
          <Input name="phone" placeholder="Phone Number (+919413844898)" type="text"              
            onChange = {this.changeEventHandler} 
            defaultValue={this.state.phone}
            error={phoneError}/>
        </div>
        <div className="field">
          <label>Email</label>
          <Input name="email" placeholder="Email Address (abc@abc.com)" type="text"              
            onChange = {this.changeEventHandler} 
            defaultValue={this.state.email}
            error = {emailError}/>
        </div>
        <Button>Submit</Button>
      </form>    
    )
  }
}

export default ContactForm
