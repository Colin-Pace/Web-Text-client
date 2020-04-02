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

        <div className = "header" >

          <Link to = '/landing' className = 'landingLink'>

            Login

          </Link>

        </div>


        <div className = "registrationPageStyle">

          <h1>Registration</h1>

          <br/><br/>

          <form onSubmit = { this.onSubmitForm } >

            <label>

              Name:

              <input
                      type = "text"
                      placeholder = 'veganFood'
                      name = 'nameToAdd'
                      className = "nameInput"
              />

            </label>

            <br/>
            <br/>

            <label>

              Password:

              <input
                      type = "text"
                      placeholder='Secret123!@#'
                      name = 'pwToAdd'
                      className = "passwordInput"
              />

            </label>

            <br/>
            <br/>
            <br/>
            <br/>

            <button type = 'submit'>Submit name and password</button>

          </form>

        </div>
      </div>
    );
  }
}
