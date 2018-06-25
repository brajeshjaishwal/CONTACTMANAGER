import React from 'react'

export default function ContactList({contacts}) {

    const renderContactList = () => {
        return contacts.map(c => <li key={c._id}>{c.name.first} {c.name.last}</li>)
    }

    return (
    <div>
        <p>Contact list under construction</p>
        <ul>{renderContactList()}</ul>
    </div>
    )
}