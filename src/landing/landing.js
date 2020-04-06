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

      <div>

        <div className = "login">

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
                      placeholder = 'Secret123!@#'
                      name = 'pwToAdd'
                      className = "inputTwo"
              />

              <button type = 'submit'>Enter</button>

            </div>

          </form>


          <Link to = '/registration' className = 'registration'>

            <span className = "regText">Registration</span>

          </Link>


        </div>

        <div className = "page">

          <div className = "text">

            <h1>Login</h1>

            <div className = "instructions">

              <p>Application instructions: If you have an account, please enter your name and password to go to the table top. There you can enter the name of a folder, select created folders and make posts for them, select posts, and enter post text. If you do not have an account, please go to registration to create one.</p>

            </div>

          </div>

        </div>

      </div>

    );
  }
}
