import React, { Component } from 'react';

import './landing.css';

import { Link } from 'react-router-dom';



export default class Landing extends React.Component {

  constructor(props) {

    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);

    this.spinner = React.createRef();

    this.unsuccessfulLogin = this.props.unsuccessfulLogin;

  }


  onSubmitForm(e) {

    e.preventDefault();

    let items = [];

    items.push(e.target.nameToAdd.value);

    items.push(e.target.pwToAdd.value);

    e.target.nameToAdd.value = '';

    e.target.pwToAdd.value = '';

    this.props.onAddItems(items);

    const spinner = this.spinner.current;

    spinner.style.display = 'initial';

  }


  render() {

    if (this.props.unsuccessfulLogin !== undefined) {

      const spinner = this.spinner.current;

      spinner.style.display = 'none';

    }

    return (

      <div>

        <div className = "loginNavbar">

          <form

            onSubmit = { this.onSubmitForm }
            className = "nonMobileForm"

          >

            <div className = "form">

              <input

                type = "text"
                placeholder = 'User Name'
                name = 'nameToAdd'
                className = "inputOne"
                aria-required="true"
                aria-label="User name for login"
                aria-describedby="landingInstructions"

              />

              <input

                type = "text"
                placeholder = 'Password123!@#'
                name = 'pwToAdd'
                className = "inputTwo"
                aria-required="true"
                aria-label="Password for login"
                aria-describedby="landingInstructions"

              />

              <button type = 'submit'>Enter</button>

            </div>

          </form>

          <Link

            to = '/registration'
            className = 'registration'

          >

            <span className = "regText">Registration</span>

          </Link>

        </div>

        <div className = "page">

          <h1>Web Text</h1>

          <p

            className = "instructions"
            id = "landingInstructions"

          >Application instructions: If you have an account, please enter your name and password to go to the table top. There you can enter the name of a folder, select created folders and make posts for them, select posts, and enter post text. If you do not have an account, please go to registration to create one.</p>

          <div

            id = "landingLoader"
            ref = { this.spinner }

          ></div>

          <form

            onSubmit = { this.onSubmitForm }
            className = "mobileLandingForm"

          >

            <div className = "mobileInputs">

              <input

                type = "text"
                placeholder = 'User Name'
                name = 'nameToAdd'
                className = "inputOne"
                aria-required="true"
                aria-label="User name for mobile login"
                aria-describedby="landingInstructions"

              />

              <input

                type = "text"
                placeholder = 'Password123!@#'
                name = 'pwToAdd'
                className = "inputTwo"
                aria-required="true"
                aria-label="Password for mobile login"
                aria-describedby="landingInstructions"

              />

              <br/>

              <button type = 'submit'>Enter</button>

            </div>

          </form>

        </div>

      </div>

    );
  }
}
