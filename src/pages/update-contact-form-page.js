import React from 'react'
import ContactForm from "../components/contact-form";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateContact, getLocalContact } from '../actions/contact-actions'

class UpdateContactFormPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
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
            this.setState({redirect: true})
            console.log("submitHandler:" + this.state.redirect)
        })
        .catch(err => {
            //console.log(err)
        })
    }

    render() {

        let contact = this.props.contact
        console.log('update contact from page render')
        console.log(contact)
        return (
            <div>
            <h1>"Update Contact"</h1>
            {   
                this.state.redirect ? <Redirect  to="/" /> :
                (
                    contact === null || contact === undefined? 
                    <div>Loading ...</div> :
                    <ContactForm 
                        update = {true}
                        contact = {contact} 
                        errors = {this.props.error}
                        onSubmit = {this.submitHandler} />
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
export default connect(mapStateToProps, { updateContact, getLocalContact })(UpdateContactFormPage)