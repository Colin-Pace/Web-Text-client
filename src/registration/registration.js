import React from 'react';

import { Link } from 'react-router-dom';

import Landing from '../landing/landing.js';

import './registration.css';




export default class Registration extends React.Component {

  constructor(props) {

    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);

  }


  onSubmitForm(e) {

    e.preventDefault();

    let items = [];

    items.push(e.target.nameToAdd.value);

    items.push(e.target.pwToAdd.value);

    e.target.nameToAdd.value = '';

    e.target.pwToAdd.value = '';

    this.props.onAddItems(items);

  }


  render() {

    return (

      <div >

        <div className = "registrationForm" >

          <form onSubmit = { this.onSubmitForm } >

            <div className = "form">

              <input
                        type = "text"
                        placeholder = 'User Name'
                        name = 'nameToAdd'
                        className = "inputOne"
              />

              <input
                      type = "text"
                      placeholder = 'Password123!@#'
                      name = 'pwToAdd'
                      className = "inputTwo"
              />

              <button type = 'submit'>Enter</button>

            </div>

        </form>

          <Link to = '/landing' className = 'landingLink'>

            <span className = "landLinkText">Login</span>

          </Link>

        </div>

        <div className = "regPage">

          <h1>Registration</h1>

          <p className = "regInstructions">In order to register, please enter a user name and a password. The password should be longer than eight characters long. Also it must contain one upper case and one lower case character, one number, and a special character.</p>

        </div>

      </div>
    );
  }
}
