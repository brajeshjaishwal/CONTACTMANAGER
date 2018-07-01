import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom'
import ContactListPage from './pages/contact-list-page';
import UpdateContactFormPage from './pages/update-contact-form-page';
import CreateContactFormPage from './pages/create-contact-form-page';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <div className="ui two item menu">
            <NavLink className="item" activeClassName="active" exact to = "/">Contact List</NavLink>
            <NavLink className="item" activeClassName="active" exact to = "/contacts/new" >Add Contact</NavLink>
          </div>
          <Route exact path="/" component={ContactListPage}></Route>
          <Route exact path="/contacts/new" component={CreateContactFormPage}></Route>
          <Route exact path="/contacts/edit/:id" component={UpdateContactFormPage}></Route>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
