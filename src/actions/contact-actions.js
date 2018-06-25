import { contacts } from '../contact-data'

export function fetchContacts11() {
    return dispatch => { 
            dispatch (
            {
                type: 'FETCH_CONTACTS',
                payload: contacts
            })
    }
}


export const fetchContacts = () => {
    return {
                type: 'FETCH_CONTACTS',
                payload: contacts
            }
}