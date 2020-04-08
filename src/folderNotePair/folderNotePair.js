import React from 'react';

import FolderMenu from '../folderMenu/folderMenu.js';

import './folderNotePair.css';



export default class FolderNotePair extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      selectedFolderID: null,

      folderIDToEdit: null,

      noteIDToEdit: null

    }

    this.handleFolderLink = this.handleFolderLink.bind(this);

    this.handleNoteLink = this.handleNoteLink.bind(this);

    this.handleEditFolderClick = this.handleEditFolderClick.bind(this);

    this.listenEditFolderEnter = this.listenEditFolderEnter.bind(this);

    this.createNote = this.createNote.bind(this);


  }

  createNote(folderID) {

    this.setState({selectedFolderID: null});

    this.props.createNote(folderID);
  }


  handleEditFolderClick(folderID) {

    this.setState({ folderIDToEdit: folderID })

  }


  handleFolderLink(e) {

    e.preventDefault();

    let folderID = parseInt(e.target.getAttribute( 'data-folderid' ));

    this.setState({ selectedFolderID: folderID });

  }


  handleNoteLink(e) {

    e.preventDefault();

    let noteClicked = parseInt(e.target.getAttribute( 'data-noteid' ));

    let noteClickedFolder = e.target.getAttribute('data-notefolder');

    this.props.onNoteClick(noteClicked, noteClickedFolder);

  }


  listenEditFolderEnter(e) {

    e.preventDefault();

    let newFolderName = e.target.folderEnter.value;

    let folderIDToEdit = this.state.folderIDToEdit;

    e.target.folderEnter.value = '';

    this.props.editFolder(newFolderName, folderIDToEdit);

    this.setState({ folderIDToEdit: null });

  }


  render() {

    let foldersAndNotes = [];

    let items = this.props.items;

    for (let item in items) {

      if (items[item]['folderName'].length === 0) {

        continue;

      } else {

        foldersAndNotes.push(

            <li>

              <div className = "folderAndNotes">

              {
                  this.state.folderIDToEdit === items[item]['folderID'] ? (

                    <form onSubmit = { this.listenEditFolderEnter } >

                      <input

                        type = "text"
                        name = "folderEnter"
                        placeholder = { items[item]['folderName'] }
                        aria-required="true"
                        aria-label="Edit folder name"

                      / >

                      <input type="submit" style = { { display: "none" } } / >

                    </form>

                  ) : (

                    < a href = "#"

                      onClick = { this.handleFolderLink }
                      data-folderID = { items[item]['folderID'] }
                      className = "folderName">

                        { items[item]['folderName'] }

                    </ a >
                  )

              }

              {
                this.state.folderIDToEdit === null &&

                this.state.selectedFolderID === items[item]['folderID'] ? (


                  < FolderMenu

                    folderID = { items[item]['folderID'] } deleteFolder = { this.props.deleteFolder }
                    listenEditFolder = { this.handleEditFolderClick }
                    createNote = { this.createNote }

                  / >

                ) :

                (
                  <span>
                  </span>
                )

              }
              </div>

            </li>

        )

        for (let itr = 0; itr < items[item]['notes'].length; itr++) {

          if (items[item]['notes'][itr]['noteID'] !== null) {

            foldersAndNotes.push(

              < li className = "note" >

                {

                    < a href = "#"

                      onClick = { this.handleNoteLink }
                      data-noteid = { items[item]['notes'][itr]['noteID'] }
                      data-notefolder = { items[item]['notes'][itr]['noteFolder'] }
                      className = "notes"

                    >

                        { items[item]['notes'][itr]['noteName'] }

                    < / a >

                }

              </li>

            )
          }
        }
      }
    }


    return (

      <div>

        < ul className = "listStyle" >

          { foldersAndNotes }

        < / ul >

      </div>
    )
  }
}
