import React, { Component } from 'react';

import './landing.css';

import { Link } from 'react-router-dom';





export default class Landing extends React.Component {

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

        <div className = "header">
          <Link to = '/registration' className = 'registration'>

            Registration

          </Link>
        </div>

        <div className = "entryPageStyle">

          <h1>Login</h1>

          <div className = "instructions">
            <p>If you have an account, please enter your name and password to go to the table top. There you can enter the name of a folder, select created folders and make notes for them, select notes, and enter note text. If you do not have an account, please go to registration to create one.</p>
          </div>

          <form onSubmit = { this.onSubmitForm } >

          <br/>
          <br/>

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
                      placeholder = 'Secret123!@#'
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

          <br/>
          <br/>
          <br/>

        </div>
      </div>

    );
  }
}
