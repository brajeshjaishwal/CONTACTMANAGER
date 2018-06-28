import React from 'react'
import ContactForm from "../components/contact-form";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { newContact, saveContact, fetchContact, updateContact, getLocalContact } from '../actions/contact-actions'

class ContactFormPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false,
            update: false
        }
    }

    componentWillMount()
    {
        const {id} = this.props.match.params;
        if(!id) {
            this.props.newContact()
        }
        else {
            this.setState({update: true})
            this.props.getLocalContact(id)
        }
    }

    submitHandler = (contact) => {
        if(contact._id) {
            this.props.updateContact(contact)
            .then(response => {
                this.setState({redirect: true})
            })
            .catch(err => {
                //console.log(err)
            })
        }
        else {
            this.props.saveContact(contact)
            .then(response => {
                this.setState({redirect: true})
            })
            .catch(err => {
                //console.log(err)
            })
        }
    }
    render() {

        let contact = this.props.contact
        if(!this.state.update) {
            contact = {_id: null, name:{first: "", last: ""}, phone:"", email:""}
        }
        return (
            <div>
            <h1>{this.state.update ? "Update Contact" : "Create Contact" }</h1>
            {         
                contact === null ? <div>Loading ...</div> : 
                (
                    this.state.redirect ? <Redirect  to="/" /> :
                    <ContactForm contact = {contact}  errors={this.props.error} onSubmit = {this.submitHandler} />
                )
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contact: state.contactStore.contact,
        error: state.contactStore.error
    }
}
export default connect(mapStateToProps, {newContact, saveContact, fetchContact, updateContact, getLocalContact})(ContactFormPage)