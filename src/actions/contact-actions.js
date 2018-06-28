//import { contacts } from '../contact-data'
import { client } from '.';
import { Globals } from './constants';

const url = '/contacts'

export const fetchContacts = () => {
    return {
        type: Globals.FETCH_ALL,
        payload: client.get(url)
    }
}

export const fetchContact = (id) => {
    return {
        type:Globals.FETCH,
        payload: client.get(`${url}/${id}`)
    }
}

export const newContact = () => {
    return {
        type: Globals.NEW_CONTACT
    }
}

export const saveContact = (contact) => {
    return {
        type: Globals.SAVE,
        payload: client.post(url, contact)
    }
}

export const updateContact = (contact) => {
    return {
        type: Globals.UPDATE,
        payload: client.put(`${url}/${contact._id}`, contact)
    }
}

export const getLocalContact = (id) => {
    return {
        type: Globals.GET_LOCAL,
        payload: id
    }
}