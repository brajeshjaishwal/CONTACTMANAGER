import React from 'react'
import ContactForm from "../components/contact-form";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { newContact, saveContact } from '../actions/contact-actions'

class ContactFormPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
    }

    componentDidMount()
    {
        this.props.newContact()
    }

    submitHandler = (contact) => {
        console.log("contact-form-page: submithandler")
        console.log(contact)
        this.props.saveContact(contact)
        .then(response => {
            console.log(response)
            this.setState({redirect: true})
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
            <h1>Contact form page</h1>
            {
                this.state.redirect ?
                <Redirect  to="/" /> :
                <ContactForm contact={this.props.contact} onSubmit = {this.submitHandler} />
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("contact.form.page.mapStateToProps")
    console.log(state.contactStore)
    return {
        contact: state.contactStore.contact,
        error: state.contactStore.error
    }
}
export default connect(mapStateToProps, {newContact, saveContact})(ContactFormPage)