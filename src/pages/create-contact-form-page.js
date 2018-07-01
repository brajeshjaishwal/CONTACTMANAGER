import React from 'react'
import ContactForm from "../components/contact-form";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { newContact, saveContact } from '../actions/contact-actions'

class CreateContactFormPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
    }

    componentWillMount()
    {
        this.props.newContact()
    }

    submitHandler = (contact) => {

        this.props.saveContact(contact)
        .then(response => {
            this.setState({redirect: true})

        })
        .catch(err => {
            //console.log(err)
        })
    }
    render() {
        const contact = { name:{first: "", last: ""}, phone:"", email:""}

        return (
            <div>
            <h1>"Create Contact"</h1>
            {   
                this.state.redirect ? 
                    <Redirect  to="/" /> :
                    <ContactForm contact = {contact}  errors={this.props.error} onSubmit = {this.submitHandler} />
                
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
export default connect(mapStateToProps, { newContact, saveContact })(CreateContactFormPage)