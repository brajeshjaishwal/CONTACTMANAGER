import React, {Component} from 'react'
import { connect } from 'react-redux'
import ContactList from "../components/contact-list";
import { fetchContacts, deleteContact } from '../actions/contact-actions';

class ContactListPage extends Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    render(){
        return (
            <div>
                <h1>List of contacts</h1>
                <ContactList contactStore={this.props.contactStore} deleteContact = {this.props.deleteContact}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contactStore: state.contactStore
    }
}


export default connect(mapStateToProps, {fetchContacts, deleteContact})(ContactListPage)