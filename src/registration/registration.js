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

    this.checkPassword = this.checkPassword.bind(this);

  }

  checkPassword(password) {

    const REGEX_LOWER =/(?=.*[a-z])[\S]+/;

    const needsLower = <p className = "passwordMessage">* Needed: a lower case letter.</p>

    const REGEX_UPPER = /(?=.*[A-Z])[\S]+/;

    const needsUpper = <p className = "passwordMessage">* Needed: an upper case letter.</p>

    const REGEX_NUMBER = /(?=.*[0-9])[\S]+/;

    const needsNumber = <p className = "passwordMessage">* Needed: a number.</p>

    const REGEX_SPECIAL =/(?=.*[!@#\$%\^&])[\S]+/;

    const needsSpecial = <p className = "passwordMessage">* Needed: a special character.</p>

    let tempMessage = [];

    if (!REGEX_LOWER.test(password) && (!tempMessage.includes(needsLower))) {

      tempMessage.push(needsLower);

    }

    if (!REGEX_UPPER.test(password) && (!tempMessage.includes(needsUpper))) {

      tempMessage.push(needsUpper);

    }

    if (!REGEX_NUMBER.test(password) && (!tempMessage.includes(needsNumber))) {

      tempMessage.push(needsNumber);

    }

    if (!REGEX_SPECIAL.test(password) && (!tempMessage.includes(needsSpecial))) {

      tempMessage.push(needsSpecial);

    }

    return tempMessage;
  }


  handleChange(e) {

    this.setState( { value: e.target.value } );

    let message = this.checkPassword(e.target.value);

    this.setState( { message: message } );

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

    let isValidPassword = this.state.message.length === 0;

    const hasEnteredPassword = this.state.value.length > 0;

    let inputBoxClass = undefined;

    if (hasEnteredPassword) {

      inputBoxClass = isValidPassword ? "greenInput" : "redInput";

    }

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
                autocomplete = "off"

              />

              <input

                type = "text"
                placeholder = 'Password123!@#'
                name = 'pwToAdd'
                className = { [ inputBoxClass, "regInputTwo" ].join(" ") }
                aria-required="true"
                aria-label="Password for registration"
                aria-describedby="registrationInstructions"
                value = { this.state.value }
                onChange = { this.handleChange }
                autocomplete = "off"

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

        <div className = "showMessage" >

          { !hasEnteredPassword || isValidPassword ? "" : this.state.message }

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
                autocomplete = "off"

              />

              <input

                type = "text"
                placeholder = 'Password123!@#'
                name = 'pwToAdd'
                className = "regInputTwo"
                aria-required="true"
                aria-label="Password for mobile registration"
                aria-describedby="registrationInstructions"
                autocomplete = "off"

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
