import { Route, Switch } from 'react-router-dom'
import React from 'react'
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';

export default function routes({App}) {
    return 
    <Route path='/' component={App} >
        <Switch>
            <Route exact path="/" component={ContactListPage}></Route>
            <Route exact path="/contacts/new" component={ContactFormPage}></Route>
            <Route exact path="/contacts/edit/:id" component={ContactFormPage}></Route>
        </Switch>
    </Route>
}