import React from 'react'
import ContactCard from './contact-card';
import { CardGroup } from 'semantic-ui-react';

export default function ContactList({contactStore}) {

    let contacts = contactStore.contacts
    let error = contactStore.error
    console.log(contactStore)
    console.log(error)

    function renderCards() {
        return (error === null ? 
                        <div>
                            <p>Contact list</p>
                            <CardGroup>
                            { contacts.map(contact => <ContactCard key={contact._id} contact={contact} ></ContactCard>) }
                            </CardGroup> 
                        </div> :
                        <div className="html-error" >{error.global}</div>
        )
    }

    return (
    <div>
        {renderCards()}
    </div>
    )
}