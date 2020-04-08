import React from 'react';

import { Link } from 'react-router-dom';

import Landing from '../landing/landing.js';

import './registration.css';




export default class Registration extends React.Component {

  constructor(props) {

    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);

    this.state = {

      value: '',

      message: []

    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {

    const REGEX_LOWER =/(?=.*[a-z])[\S]+/;

    const needsLower = "The password needs a lower case letter."

    const REGEX_UPPER = /(?=.*[A-Z])[\S]+/;

    const needsUpper = "The password needs an upper case letter."

    const REGEX_NUMBER = /(?=.*[0-9])[\S]+/;

    const needsNumber = "The password needs a number."

    const REGEX_SPECIAL =/(?=.*[!@#\$%\^&])[\S]+/;

    const needsSpecial = "The password needs a special character."

    this.setState( { value: e.target.value } );

    console.log(this.state.value);

    if (!REGEX_LOWER.test(this.state.value) && (!this.state.message.includes(needsLower))) {

      this.state.message.push(needsLower);

    }

    if (!REGEX_UPPER.test(this.state.value) && (!this.state.message.includes(needsUpper))) {

      this.state.message.push(needsUpper);

    }

    if (!REGEX_NUMBER.test(this.state.value) && (!this.state.message.includes(needsNumber))) {

      this.state.message.push(needsNumber);

    }

    if (!REGEX_SPECIAL.test(this.state.value) && (!this.state.message.includes(needsSpecial))) {

      this.state.message.push(needsSpecial);

    }

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

        <div className = "regNavbar" >

          <form

            onSubmit = { this.onSubmitForm }
            className = "regNonMobileForm"

          >

            <div className = "regForm">

              <input

                type = "text"
                placeholder = 'User Name'
                name = 'nameToAdd'
                className = "regInputOne"
                aria-required="true"
                aria-label="User name for registration"
                aria-describedby="registrationInstructions"

              />

              <input

                type = "text"
                placeholder = 'Password123!@#'
                name = 'pwToAdd'
                className = "regInputTwo"
                aria-required="true"
                aria-label="Password for registration"
                aria-describedby="registrationInstructions"
                value = { this.state.value }
                onChange = { this.handleChange }

              />

              <button type = 'submit'>Enter</button>

            </div>

        </form>

          <Link

            to = '/landing'
            className = 'landingLink'

          >

            <span className = "landingLinkText">Login</span>

          </Link>

        </div>

        <div>

          { this.state.message }

        </div>

        <div className = "regPage">

          <h1 className = "regHeadingOne">Registration</h1>

          <p

            className = "regInstructions"
            id = "registrationInstructions"

          >In order to register, please enter a user name and a password. The password should be longer than eight characters long. Also it must contain one upper case and one lower case character, one number, and a special character.</p>

          <form onSubmit = { this.onSubmitForm } >

            <div className = "regMobileInputs">

              <input

                type = "text"
                placeholder = 'User Name'
                name = 'nameToAdd'
                className = "regInputOne"
                aria-required="true"
                aria-label="User name for mobile registration"
                aria-describedby="registrationInstructions"

              />

              <input

                type = "text"
                placeholder = 'Password123!@#'
                name = 'pwToAdd'
                className = "regInputTwo"
                aria-required="true"
                aria-label="Password for mobile registration"
                aria-describedby="registrationInstructions"

              />

              <button

                type = 'submit'
                className = "regButton"

              >Enter</button>

            </div>

        </form>

        </div>

      </div>
    );
  }
}
