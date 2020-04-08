import React, { Component } from 'react';

import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Landing from './landing/landing.js';

import Registration from './registration/registration.js';

import TableTop from './tableTop/tableTop.js';

import Account from './account/account.js';

import './App.css';


//const baseURL = 'http://localhost:8000';
const baseURL = 'https://radiant-thicket-42053.herokuapp.com'


class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      unsuccessfulLogin: undefined,

      password: undefined,

      authToken: undefined,

      accountDeleted: false,

      registrationMessage: undefined,

      foldersAndNotes: undefined,

      notesToView: undefined,

      folderCreated: false,

      folderEdited: false,

      folderDeleted: false,

      noteCreated: false,

      noteViewed: false,

      notes: undefined,

      noteEdited: false,

      noteNameEdited: false,

      noteDeleted: false,

      userID: undefined

    };


    this.handleLogin = this.handleLogin.bind(this);

    this.handleRegistration = this.handleRegistration.bind(this);

    this.handleAccount = this.handleAccount.bind(this);

    this.handleTableTopReady = this.handleTableTopReady.bind(this);

    this.handleCreateFolder = this.handleCreateFolder.bind(this);

    this.handleEditFolder = this.handleEditFolder.bind(this);

    this.handleDeleteFolder = this.handleDeleteFolder.bind(this);

    this.handleCreateNote = this.handleCreateNote.bind(this);

    this.handleViewNote = this.handleViewNote.bind(this);

    this.handleEditNote = this.handleEditNote.bind(this);

    this.handleEditNoteName = this.handleEditNoteName.bind(this);

    this.handleDeleteNote = this.handleDeleteNote.bind(this);

    this.handleLogout = this.handleLogout.bind(this);

  }


  makeBasicAuthToken(userName, password) {

    return window.btoa(`${userName}:${password}`);

  }


  handleLogin(data) {

    let authToken = this.makeBasicAuthToken(data[0], data[1]);

    let url = `${baseURL}/login`;

    let userName = data[0];

    let password = data[1];

    if (userName === "" || password === "") {

      console.log("Must enter user information");

    } else {

      let postBody = { userName, password, authToken };

      let options = {

        method: 'POST',

        body: JSON.stringify(postBody),

        headers: {

          "Content-Type": "application/json"

        }

      };


      fetch(url, options)

        .then( res => {

          if (!res.ok) {

            alert('Invalid login credentials. Please try again.');

            this.setState( { unsuccessfulLogin: true });

          } else {

            this.setState({

              authToken: authToken,

            });

            this.props.history.push( "/tableTop" );

          }

        })

    }
  }


  handleLogout() {

    this.setState({

      authToken: undefined

    });
  }


  handleRegistration(data) {

    let url = `${baseURL}/registration`;

    let userName = data[0];

    let password = data[1];

    let postBody = {userName, password};

    let options = {

      method: 'POST',

      body: JSON.stringify(postBody),

      headers: {

        "Content-Type": "application/json"

      }

    };


    fetch(url, options)

      .then ( res => {

        if (res.ok) {

          this.setState({

            registrationMessage: data.registrationMessage,

          });

        } else {

          throw new Error('An error occurred');

        }

      })

      .catch( err => {

        console.log(err);

        alert('Invalid registration credentials. Please try again.');

      })
  }



  handleCreateFolder(data) {

    let url = `${baseURL}/createFolder`;

    let folderName = data[0];

    let postBody = {folderName};

    let options = {

      method: 'POST',

      body: JSON.stringify(postBody),

      headers: {

        "Authorization": this.state.authToken,

        "Content-Type": "application/json"

      }

    };



    fetch(url, options)

      .then ( res => {

        if (!res.ok) {

          throw new Error('An error occurred');

        }

        return res.json();

      })

      .then( data => {

        this.setState({

          folderCreated: true

        });

        this.handleTableTopReady();

      })
  }


  handleEditFolder(newFolderName, folderID) {

    let postBody = {newFolderName, folderID};

    let url = `${baseURL}/editFolder/${folderID}`;

    let options = {

      method: 'PATCH',

      body: JSON.stringify(postBody),

      headers: {

        "Content-Type": "application/json"

      }

    };



    fetch(url, options)

      .then (res => {

        if (!res.ok) {

          throw new Error('An error occurred');

        }

        return res.json();

      })

      .then(data =>

        {

        this.setState({

          folderEdited: true

        })

        this.handleTableTopReady();

      })
  }


  handleDeleteFolder(folderID) {

    let postBody = {folderID};

    let url = `${baseURL}/deleteFolder`;

    let options = {

      method: 'DELETE',

      body: JSON.stringify(postBody),

      headers: {

        "Content-Type": "application/json"

      }

    };



    fetch(url, options)

      .then (res => {

        if (!res.ok) {

          throw new Error('An error occurred')

        }

        return res.json()

      })

      .then( data =>

        {

        this.setState({

          folderDeleted: true

        })

        this.handleTableTopReady();

      })
  }



  handleCreateNote(data) {

    let folderID = data[0];

    let noteName = data[1][0];

    let noteText = data[1][1];

    let postBody = {folderID, noteName, noteText};

    let url = `${baseURL}/createNote`;

    let options = {

      method: 'POST',

      body: JSON.stringify(postBody),

      headers: {

        "Content-Type": "application/json"

      }

    };



    fetch(url, options)

      .then ( res => {

        if (!res.ok) {

          throw new Error('An error occurred');

        }

        return res.json();

      })

      .then( data =>

        {

        this.setState({

          noteCreated: true

        })

        this.handleTableTopReady();

      })
   }


  handleViewNote(noteName) {

    let url = `${baseURL}/viewNote/${noteName}`;

    let options = {

      method: 'GET',

      headers: {

        "Content-Type": "application/json"

      }

    };



    fetch(url, options)

      .then ( res => {

        if (!res.ok) {

          throw new Error('An error occurred');

        }

        return res.json();

      })

      .then(data =>

        {

        this.setState({

          noteToView: data[0]

        })

        this.handleTableTopReady();

      })
  }



  handleEditNote(noteText, noteID) {

    let postBody = {noteText, noteID};

    let url = `${baseURL}/editNote`;

    let options = {

      method: 'PATCH',

      body: JSON.stringify(postBody),

      headers: {

        "Content-Type": "application/json"

      }

    };

    fetch(url, options)

      .then ( res => {

        if (!res.ok) {

          throw new Error('An error occurred');

        }

        return res.json()

      })

      .then( data => {

        this.setState({

          noteEdited: true

        })

        this.handleTableTopReady();

      })
  }



  handleEditNoteName(noteName, noteID) {

    let postBody = {noteName, noteID};

    let url = `${baseURL}/editNoteName`;

    let options = {

      method: 'PATCH',

      body: JSON.stringify(postBody),

      headers: {

        "Content-Type": "application/json"

      }

    };

    fetch(url, options)

      .then ( res => {

        if (!res.ok) {

          throw new Error('An error occurred');

        }

        return res.json()

      })

      .then( data => {

        this.setState({

          noteNameEdited: true

        })

        this.handleTableTopReady();

      })
  }




  handleDeleteNote(noteID) {

    let postBody = {noteID};

    let url = `${baseURL}/deleteNote`;

    let options = {

      method: 'DELETE',

      body: JSON.stringify(postBody),

      headers: {

        "Content-Type": "application/json"

      }

    };



    fetch(url, options)

      .then ( res => {

        if (!res.ok) {

          throw new Error('An error occurred');

        }

        return res.json();

      })

      .then( data => {

        this.setState({

          noteDeleted: data.noteDeleted

        });

        this.handleTableTopReady();

      })
  }





  handleAccount(data) {

    let url = `${baseURL}/deleteAccount`;

    let userName = data[0];

    let password = data[1];

    let postBody = {userName, password};

    let options = {

      method: 'DELETE',

      body: JSON.stringify(postBody),

      headers: {

        "Content-Type": "application/json"

      }

    };



    fetch(url, options)

      .then ( res => {

        if (!res.ok) {

          throw new Error('An error occurred');

        } else {

          return res.json();

        }

      })

      .then( data => {

        this.setState({

          accountDeleted: true,

          authToken: undefined

        })

        this.handleLogout();

      })

      .catch( err => {

        alert('Invalid login credentials. Please try again.');

      })
  }




  handleTableTopReady() {

    let url = `${baseURL}/tableTopReady`;

    let options = {

      method: 'GET',

      headers: {

        "Authorization": this.state.authToken,

        "Content-Type": "application/json"

      }

    };



    fetch(url, options)

      .then ( res => {

        if (!res.ok) {

          throw new Error('An error occurred');

        }

        return res.json();

      })

      .then( data => {

        this.setState( {

          foldersAndNotes: data

        })
      })
  }



  render() {

    if (this.state.authToken === undefined) {

      return (

        <div className = 'App'>

          <Switch>

              <Route path = '/registration' >

                <Registration onAddItems = { this.handleRegistration } />

              </Route>


              <Route >

                <Landing

                  onAddItems = { this.handleLogin }
                  unsuccessfulLogin =  { this.state.unsuccessfulLogin }

                />

              </Route>

            </Switch>

        </div>
      )

    } else {

      return (

        <div className='App'>

          <Switch>

            <Route

              exact path = '/account'
              render = { ({ history }) => {

                return <Account onAddItems = { this.handleAccount } />

                        }} >

            </Route>


            <Route>

              <TableTop

                listenForTableTopReady = { this.handleTableTopReady }
                foldersAndNotesToLoad = { this.state.foldersAndNotes }
                createFolder = { this.handleCreateFolder }
                editFolder = { this.handleEditFolder }
                deleteFolder = { this.handleDeleteFolder }
                noteDetail = { this.handleCreateNote }
                viewNote = { this.handleViewNote }
                noteToView = { this.state.noteToView }
                editNote = { this.handleEditNote }
                editNoteName = {this.handleEditNoteName }
                deleteNote = { this.handleDeleteNote }
                onLogoutClick = { this.handleLogout } />

            </Route>

          </Switch>

        </div>

      )
    }
  }
}

export default withRouter(App)
