import React from 'react'
import ContactList from "../components/contact-list";
import { connect } from 'tls';
import { fetchContacts } from '../actions/contact-actions';

class ContactListPage extends React.Component {

    componentDidMount() {
        this.props.fetchContacts()
    }

    render() {
        return (
            <div>
            <h1>List of contacts</h1>
            <ContactList contacts={this.props.contacts} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contactStore.contacts
    }
}
export default connect(mapStateToProps, {fetchContacts})(ContactListPage)