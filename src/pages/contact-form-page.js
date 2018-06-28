import React from 'react'
import ContactForm from "../components/contact-form";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { newContact, saveContact, fetchContact, updateContact } from '../actions/contact-actions'

class ContactFormPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
    }

    componentDidMount()
    {
        const {id} = this.props.match.params;
        console.log(this.props)
        if(id)
        {
            this.props.fetchContact(id)
        }
        else 
        {
            this.props.newContact()
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
        return (
            <div>
            <h1>Contact form page</h1>
            {
                this.state.redirect ?
                <Redirect  to="/" /> :
                <ContactForm contact={this.props.contact}  errors={this.props.error} onSubmit = {this.submitHandler} />
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
export default connect(mapStateToProps, {newContact, saveContact, fetchContact, updateContact})(ContactFormPage)