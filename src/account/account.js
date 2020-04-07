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

        <div className = "navbar" >

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

          <Link to = '/tableTop' className = "tableTopLink" >

            <span className = "linkText">Table Top</span>

          </Link>

        </div>

        <div className = "accountPageStyle">

          <h1>Account</h1>

          <p className = "accountInstructions">Enter the username and password to delete the account.</p>

        </div>

      </div>
    );
  }
}
