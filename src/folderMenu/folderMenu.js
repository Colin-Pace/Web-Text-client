import React from 'react';

import './folderMenu.css'



export default class FolderMenu extends React.Component {

  constructor(props) {

    super(props);

    this.listenEditFolder = this.listenEditFolder.bind(this);

    this.listenDeleteFolder = this.listenDeleteFolder.bind(this);

    this.listenCreateNote = this.listenCreateNote.bind(this);

  }


  listenEditFolder(e) {

    e.preventDefault();

    this.props.listenEditFolder(this.props.folderID);

  }


  listenDeleteFolder(e) {

    e.preventDefault();

    this.props.deleteFolder(this.props.folderID);

  }


  listenCreateNote(e) {

    e.preventDefault();

    this.props.createNote(this.props.folderID);

  }


  render() {

    return (

      <div>

        <a
            href = "#"
            onClick = { this.listenEditFolder }
            className = "edit"
        >

          <span className = "editFolderText">Edit folder</span>

        </a>

        <span> | </span>

        <a
            href = "#"
            onClick = { this.listenDeleteFolder }
            className = "delete"
        >

          <span className = "deleteFolderText">Delete folder</span>

        </a>

        <span> | </span>

        <a
            href = "#"
            onClick = { this.listenCreateNote }
            className = "create"
        >

        <span className = "createNoteText">Create post</span>

        </a>

      </div>

    )
  }
}
