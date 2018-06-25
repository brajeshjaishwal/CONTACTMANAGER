import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom'
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';

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
          <Route exact path="/contacts/new" component={ContactFormPage}></Route>
          <Route exact path="/contacts/edit/:id" component={ContactFormPage}></Route>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
