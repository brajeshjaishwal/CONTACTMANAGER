// src/components/contact-form

import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'

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

    return (
      <form className="ui form" onSubmit = {this.onSubmitHandler}>
        <div className="field">
          <label>First Name</label>
          <div className="two fields">
          <input name="name.first" placeholder="First Name (Brajesh)" type="text" 
            onChange = {this.changeEventHandler} 
            defaultValue={this.state["name.first"]} />
          <input name="name.last" placeholder="Last Name (Jaishwal)" type="text"              
            onChange = {this.changeEventHandler} 
            defaultValue={this.state["name.last"]}/>
          </div>
        </div>
        <div className="field">
          <label>Phone</label>
          <input name="phone" placeholder="Phone Number (+919413844898)" type="text"              
            onChange = {this.changeEventHandler} 
            defaultValue={this.state.phone}/>
        </div>
        <div className="field">
          <label>Email</label>
          <input name="email" placeholder="Email Address (abc@abc.com)" type="text"              
            onChange = {this.changeEventHandler} 
            defaultValue={this.state.email}/>
        </div>

        <Button>Submit</Button>
      </form>    
    )
  }
}

export default ContactForm
