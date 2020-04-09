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

        <div className = "accountNavbar" >

          <form

            onSubmit = { this.onSubmitForm }
            className = "nonMobileAccountFormOne"

          >

            <div className = "nonMobileAccountFormTwo">

              <input

                type = "text"
                placeholder = 'User Name'
                name = 'nameToAdd'
                className = "accountInputOne"
                aria-required="true"
                aria-label="User name for account deletion"
                aria-describedby="accountInstructions"
                autocomplete = "off"

              />

              <input

                type = "text"
                placeholder = 'Password123!@#'
                name = 'pwToAdd'
                className = "accountInputTwo"
                aria-required="true"
                aria-label="Password for account deletion"
                aria-describedby="accountInstructions"
                autocomplete = "off"

              />

              <button type = 'submit'>Enter</button>

            </div>

          </form>

          <Link to = '/tableTop' className = "tableTopLink" >

            <span className = "tableTopLinkText">Table Top</span>

          </Link>

        </div>

        <div className = "accountPage">

          <h1 className = "accountHeading">Account</h1>

          <p

            className = "accountInstructions"
            id = "accountInstructions"

          >Enter the username and password to delete the account.</p>

          <form

            onSubmit = { this.onSubmitForm }
            className = "mobileAccountForm"

          >

            <div className = "mobileAccountInputs">

              <input

                type = "text"
                placeholder = 'User Name'
                name = 'nameToAdd'
                className = "inputOne"
                aria-required="true"
                aria-label="User name for mobile account deletion"
                aria-describedby="accountInstructions"
                autocomplete = "off"

              />

              <input

                type = "text"
                placeholder = 'Password123!@#'
                name = 'pwToAdd'
                className = "inputTwo"
                aria-required="true"
                aria-label="Password for mobile account deletion"
                aria-describedby="accountInstructions"
                autocomplete = "off"

              />

              <button

                type = 'submit'
                className = 'accountButton'

              >Enter</button>

            </div>

          </form>

        </div>

      </div>
    );
  }
}
