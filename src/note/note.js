import React from 'react';

import './note.css';



export default class Note extends React.Component {

  constructor(props) {

    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);

  }


  onSubmitForm(e) {

    e.preventDefault();

    let items = [];

    if (e.target.noteName.value === "" || e.target.noteText.value === "") {

      console.log("Cannot create an empty note");

    } else {

      items.push(e.target.noteName.value);

      items.push(e.target.noteText.value);

      e.target.noteName.value = "";

      e.target.noteText.value = "";

      this.props.noteDetail(items);

    }

  }


  render() {

    return (

      <div>

        <form onSubmit = { this.onSubmitForm } >

          <span className = "noteForm">

            <input

              type = "text"
              placeholder = 'Weather'
              name = 'noteName'
              className = "noteTitle"
              aria-required="true"
              aria-label="Post name input"

            / >

            <textarea

                name = "noteText"
                placeholder = 'Enter note text here'

            >

            </textarea>

            < input

                type = "submit"
                className = "submit"
                aria-required="true"
                aria-label="Post name input button"
                
            / >

          </span>

        </form>

      </div>

    )
  }
}
