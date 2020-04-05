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

        <div className = "header">

          <Link to = '/registration' className = 'registration'>

            Registration

          </Link>

        </div>

        <div className = "page">
          <h1>Login</h1>

          <div className = "entryPageStyle">

            <div className = "instructions">
              <p>Application instructions: If you have an account, please enter your name and password to go to the table top. There you can enter the name of a folder, select created folders and make notes for them, select notes, and enter note text. If you do not have an account, please go to registration to create one.</p>
            </div>

            <form onSubmit = { this.onSubmitForm } >

            <br/>
            <br/>
            <br/>
            <br/>

              <div className = "labelsInputsButton">

                <div className = "labelsInputs">

                  <div className = "labelInputOne">

                    <label className = "labelOne">

                      Name:

                    </label>

                    <input
                              type = "text"
                              placeholder = 'User Name'
                              name = 'nameToAdd'
                              className = "inputOne"
                    />

                  </div>

                  <br/>

                  <div className = "labelInputTwo">


                    <label>

                      Password:

                    </label>

                    <input
                            type = "text"
                            placeholder = 'Secret123!@#'
                            name = 'pwToAdd'
                            className = "inputTwo"
                    />

                  </div>
                </div>


                <div className = "button">

                  <button type = 'submit'>Enter</button>

                </div>

              </div>

            </form>

          </div>
        </div>
      </div>

    );
  }
}
