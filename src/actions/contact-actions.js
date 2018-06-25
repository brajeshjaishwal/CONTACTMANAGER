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