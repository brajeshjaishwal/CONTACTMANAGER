import { contacts } from '../contact-data'

export const fetchContacts = () => {

    return {
                type: 'FETCH',
                payload: contacts
            }
}