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
        payload: client.get(`${url}/{id}`)
    }
}