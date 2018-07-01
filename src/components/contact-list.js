import React from 'react'
import ContactCard from './contact-card';
import { CardGroup } from 'semantic-ui-react';

export default function ContactList({contactStore, deleteContact}) {

    let contacts = contactStore.contacts
    let error = contactStore.error

    function renderCards() {
        return (error === null ? 
                        <CardGroup>
                            { contacts.map(v => 
                                <ContactCard key={v._id} contact={v} deleteContact = {deleteContact}/>) 
                            }
                        </CardGroup> :
                        <div className="html-error" >
                            {error.global}
                        </div>
        )
    }

    return (
    <div>
        {renderCards()}
    </div>
    )
}