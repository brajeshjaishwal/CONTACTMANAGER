import React, {Component} from 'react'
import { connect } from 'react-redux'
import ContactList from "../components/contact-list";
import { fetchContacts } from '../actions/contact-actions';

class ContactListPage extends Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    render(){
        return (
            <div>
                <h1>List of contacts</h1>
                <ContactList contactStore={this.props.contactStore} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.contacts.error)
    return {
        contactStore: state.contacts
    }
}


export default connect(mapStateToProps, {fetchContacts})(ContactListPage)