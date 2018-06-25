import React from 'react'
import ContactCard from './contact-card';
import { CardGroup } from 'semantic-ui-react';

export default function ContactList({contactStore}) {

    let contacts = contactStore.contacts

    function renderCards() {
        return <CardGroup>
                    { contacts.map(contact => <ContactCard key={contact._id} contact={contact} ></ContactCard>) }
                </CardGroup> 
    }

    return (
    <div>
        <p>Contact list under construction</p>
        {renderCards()}
    </div>
    )
}