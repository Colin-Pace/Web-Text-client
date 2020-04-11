import React from 'react';

import { Link } from 'react-router-dom';

import Note from '../note/note.js';

import FolderNotePair from '../folderNotePair/folderNotePair.js';

import './tableTop.css';



export default class TableTop extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      folderIDForNoteCreation: null,

      selectedNoteID: null,

      noteIDToEdit: null,

      noteNameIDToEdit: null,

      value: ""
    }

    this.editFolder = this.editFolder.bind(this);

    this.deleteFolder = this.deleteFolder.bind(this);

    this.createNote = this.createNote.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.onButtonClick = this.onButtonClick.bind(this);

    this.onNoteClick = this.onNoteClick.bind(this);

    this.combineFolderIDNoteDetail = this.combineFolderIDNoteDetail.bind(this);

    this.handleNoteTextLink = this.handleNoteTextLink.bind(this);

    this.handleNoteNameLink = this.handleNoteNameLink.bind(this);

    this.listenEditNote = this.listenEditNote.bind(this);

    this.listenDeleteNote = this.listenDeleteNote.bind(this);

    this.listenEditNoteName = this.listenEditNoteName.bind(this);
  }


  componentDidMount() {

    this.props.listenForTableTopReady();

  }


  handleChange(e) {

    this.setState( { value: e.target.value, folderIDForNoteCreation: null } ) ;

  }


  handleSubmit(e) {

    e.preventDefault();

    let data = [];

    data.push(e.target.folder.value);

    e.target.folder.value = '';

    this.props.createFolder(data);

    this.setState( { folderIDForNoteCreation: null } ) ;

  }


  editFolder(newFolderName, folderIDToEdit) {

    this.setState( { folderIDForNoteCreation: null } ) ;

    this.props.editFolder(newFolderName, folderIDToEdit);

  }


  deleteFolder(folderID) {

    this.setState( {folderIDForNoteCreation: null, selectedNoteID: null } ) ;

    this.props.deleteFolder(folderID);

  }


  onButtonClick(e) {

    e.preventDefault();

    this.props.onLogoutClick();

    this.setState( { folderIDForNoteCreation: null } ) ;

  }


  createNote(folderID) {

    this.setState( { folderIDForNoteCreation: folderID, selectedNoteID: null } );

  }


  onNoteClick(noteClicked, noteClickedFolder) {

    this.setState({

      selectedNoteID: noteClicked,

      folderIDForNoteCreation: null,

    })
  }


  noteName() {

    let data = this.props.foldersAndNotesToLoad;

    let noteNameToLoad = [];

    if (data === undefined || data[0] === undefined) {

      return null;

    }

    for (let folder in data) {

      for (let itr in data[folder][ 'notes' ]) {

        if (data[folder][ 'notes' ][itr][ 'noteID' ] === this.state.selectedNoteID && this.state.selectedNoteID !== null) {

          noteNameToLoad.push(

            <div>

              {

                this.state.noteNameIDToEdit === data[folder][ 'notes' ][itr][ 'noteID' ] ? (

                  <form onSubmit = { this.handleNoteNameLink } >

                    <input

                      type = "text"
                      name = "noteNameEnter"
                      placeholder = { data[folder][ 'notes' ][itr][ 'noteName' ] }
                      className = "postNameLink"
                      aria-required = "true"
                      aria-label = "Edit post name"
                      autoComplete = "off"

                    / >

                    <input

                        type = "submit"
                        aria-required = "true"
                        aria-label = "Edit post name keyboard enter"
                        style = { { display: "none" } }

                    / >

                  </form>

                ) : (

                  < a href = "#"

                    onClick = { this.listenEditNoteName }
                    data-noteid = { data[folder][ 'notes' ][itr][ 'noteID' ] }
                    data-notefolder = { data[folder][ 'notes' ][itr][ 'noteFolder' ] }
                    className = "noteView"

                  >

                    { data[folder][ 'notes' ][itr][ 'noteName' ] }

                  </a>

                )
              }

            </div>
          )
        }
      }

    }

    return noteNameToLoad;
  }


  noteContent() {

    let data = this.props.foldersAndNotesToLoad;

    let noteToLoad = [];

    if (data === undefined || data[0] === undefined) {

      return null;

    }

    for (let folder in data) {

      for (let itr in data[folder][ 'notes' ]) {

        if (data[folder][ 'notes' ][itr][ 'noteID' ] === this.state.selectedNoteID && this.state.selectedNoteID !== null) {

          noteToLoad.push(

            <p>

              {

                this.state.noteIDToEdit === data[folder][ 'notes' ][itr][ 'noteID' ] ? (

                  <form onSubmit = { this.handleNoteTextLink } >

                    <textarea

                      type = "text"
                      name = "noteEnter"
                      placeholder = { data[folder][ 'notes' ][itr][ 'noteText' ] }
                      value = { this.state.value }
                      onChange = { this.handleChange }
                      className = 'editPostText'

                    / >

                    <br/>

                    <input

                      type = "submit"
                      className = "noteEnterButton"
                      aria-required = "true"
                      aria-label = "Edit post text"

                    / >

                  </form>

                ) : (

                  <div className = "noteDisplayed">

                    < a href = "#"

                      onClick = { this.listenEditNote }
                      data-noteid = { data[folder][ 'notes' ][itr][ 'noteID' ] }
                      data-notefolder = { data[folder][ 'notes' ][itr][ 'noteFolder' ] }
                      className = "noteTextView"

                    >

                      { data[folder][ 'notes' ][itr][ 'noteText' ] }

                    </a>

                    <div className = "postDeleteLink">

                      < a href = "#"

                        onClick = { this.listenDeleteNote }
                        data-noteid = { data[folder][ 'notes' ][itr][ 'noteID' ] }
                        className = "noteDelete"

                      >

                      Delete note

                      </a>

                    </div>

                  </div>

                )
              }

            </p>
          )
        }
      }

    }

    return noteToLoad;
  }



  listenEditNote(e) {

    e.preventDefault();

    let noteID = parseInt(e.target.getAttribute( 'data-noteid' ));

    let data = this.props.foldersAndNotesToLoad;

    let valueTB;

    for (let folder in data) {

      for (let itr in data[folder][ 'notes' ]) {

        if (noteID === data[folder][ 'notes' ][itr][ 'noteID' ]) {

          valueTB = data[folder][ 'notes' ][itr][ 'noteText' ];
        }
      }
    }

    this.setState( { noteIDToEdit: noteID, value: valueTB } )

  }


  listenEditNoteName(e) {

    e.preventDefault();

    let noteID = parseInt(e.target.getAttribute( 'data-noteid' ));

    this.setState( {noteNameIDToEdit: noteID } )

  }


  handleNoteTextLink(e) {

    e.preventDefault();

    let noteText = e.target.noteEnter.value;

    e.target.noteEnter.value = '';

    this.props.editNote(noteText, this.state.noteIDToEdit);

    this.setState( { noteIDToEdit: null } );

  }


  handleNoteNameLink(e) {

    e.preventDefault();

    let noteName = e.target.noteNameEnter.value;

    e.target.noteNameEnter.value = '';

    this.props.editNoteName(noteName, this.state.noteNameIDToEdit);

    this.setState( { noteNameIDToEdit: null } );

  }

  combineFolderIDNoteDetail(noteDetail) {

    if (this.state.folderIDForNoteCreation !== null) {

      let idAndDetail = [this.state.folderIDForNoteCreation, noteDetail];

      this.props.noteDetail(idAndDetail);

      this.setState( { folderIDForNoteCreation: null });
    }
  }


  listenDeleteNote(e) {

    e.preventDefault();

    let noteID = parseInt(e.target.getAttribute( 'data-noteid' ));

    this.props.deleteNote(noteID);

  }


  render() {

    return (

      <div>

        <div className = "tableTopNavbar">

          <button

            type = 'submit'
            onClick = { this.onButtonClick }
            className = "logOutButton"

          >Logout

          </button>

          <span className = "tableTopTitle">Table Top</span>

          <Link

            to = '/account'
            className = "accountLink"

          >

            <span className = "accountLinkText">Account</span>

          </Link>

        </div>

        <div className = "container">

          <div className = "sidebar">

            <form

              onSubmit = { this.handleSubmit }
              className = "sidebarInput"

            >

              <input

                type = "text"
                name = "folder"
                placeholder = "Enter folder name"
                className = "folderNameInput"
                aria-required = "true"
                aria-label = "Folder name input"
                autoComplete = "off"

              />

              <input

                className = "buttonToHide"
                type = "submit"
                value = "Submit"
                aria-required = "true"
                aria-label = "Folder name input button"

              />

            </form>

            < FolderNotePair

              createNote = { this.createNote }
              editFolder = { this.editFolder }
              editNote = { this.editNote }
              deleteFolder = { this.deleteFolder }
              items = { this.props.foldersAndNotesToLoad }
              onNoteClick = { this.onNoteClick }

            / >

          </div>

          <div className = "textview">


            {

              this.state.folderIDForNoteCreation !== null

              &&

                < Note

                  noteDetail = { this.combineFolderIDNoteDetail }

                / >

            }

            { this.noteName() }

            { this.noteContent() }

          </div>

        </div>

      </div>

    );
  }
}
