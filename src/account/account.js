import React from 'react';

import { Link } from 'react-router-dom';

import './account.css';


export default class Account extends React.Component {

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
          <Link to = '/tableTop' className = "tableTopLink" >

            Table Top

          </Link>
        </div>

        <h1>Account</h1>

        <div className = "accountPageStyle">

          <br/>

          <p>Enter your username and password to delete your account</p>

          <form onSubmit = { this.onSubmitForm } >

            <label>

              Name:

              <input
                    type = "text"
                    placeholder = 'User Name'
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

            <button type = 'submit'>Enter</button>

          </form>

        </div>

      </div>
    );
  }
}
