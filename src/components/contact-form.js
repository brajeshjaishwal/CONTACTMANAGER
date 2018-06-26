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
    console.log(this.state)
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    let nc = {
      name: {
        first: this.state["name.first"],
        last: this.state["name.last"]
      },
      phone: this.state.phone,
      email: this.state.email
    }
    console.log("contact-form: onSubmitHandler")
    console.log(nc)
    this.props.submitHandler(nc);
  }

  render() {

    return (
      <form className="ui form">
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
