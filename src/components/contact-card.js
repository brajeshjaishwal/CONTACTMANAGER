import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Button } from "semantic-ui-react";

export default function ContactCard({contact, deleteContact}) {

    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    <Icon name="user outline" /> {contact.name.first} {contact.name.last}
                </Card.Header>
                <Card.Description>
                    <p><Icon name="phone" />{contact.phone}</p>
                    <p><Icon name="mail" />{contact.email}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Link to={{pathname: `/contacts/edit/${contact._id}`, data: {contact}}} className="ui basic button green">Edit</Link>
                    <Button basic color='red'>Delete</Button>
                </div>
            </Card.Content>
        </Card>
    )
}