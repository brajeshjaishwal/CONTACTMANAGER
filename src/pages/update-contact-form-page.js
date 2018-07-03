import React from 'react'
//import ContactForm from '../components/contact-form.redux-form'
import ContactForm  from '../components/contact-form.formic'
//import ContactForm from "../components/contact-form";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'
import { updateContact, getLocalContact } from '../actions/contact-actions'

class UpdateContactFormPage extends React.Component {
    constructor(props){
        super(props)
        this.submitHandler = this.submitHandler.bind(this)
    }

    componentWillMount()
    {
        const {id} = this.props.match.params;
        this.props.getLocalContact(id)
    }

    submitHandler = (contact) => {
        contact._id = this.props.contact._id
        this.props.updateContact(contact)
        .then(response => {
            console.log(this.props)
        })
        .catch(err => {
            throw new SubmissionError(this.props.error)
        })
    }

    shouldComponentUpdate(nextProps) {
        return this.props.contact !== nextProps.contact
    } 

    render() {

        let contact = this.props.contact
        console.log('update contact form page render')
        console.log(contact)
        return (
            <div>
            <h1>Update Contact</h1>
            {   
                this.props.redirect ? <Redirect  to="/" /> :
                (
                    contact === null || contact === undefined? 
                    <div>Loading ...</div> :
                    <ContactForm
                        update = {true}
                        contact = {contact}
                        errors = {this.props.error}
                        loading = {this.props.loading}
                        onSubmitHandler = {this.submitHandler} />
                )
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contact: state.contactStore.contact,
        error: state.contactStore.error,
        redirect: state.contactStore.redirect
    }
}
export default connect(mapStateToProps, { updateContact, getLocalContact })(UpdateContactFormPage)