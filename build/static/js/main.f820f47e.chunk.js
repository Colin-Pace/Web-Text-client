(this["webpackJsonpweb-text"]=this["webpackJsonpweb-text"]||[]).push([[0],{22:function(e,t,a){e.exports=a(41)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),l=a.n(r),i=a(9),s=(a(27),a(3)),d=a(4),c=a(1),u=a(5),m=a(6),h=a(11),p=(a(28),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSubmitForm=n.onSubmitForm.bind(Object(c.a)(n)),n.spinner=o.a.createRef(),n.unsuccessfulLogin=n.props.unsuccessfulLogin,n}return Object(d.a)(a,[{key:"onSubmitForm",value:function(e){e.preventDefault();var t=[];t.push(e.target.nameToAdd.value),t.push(e.target.pwToAdd.value),e.target.nameToAdd.value="",e.target.pwToAdd.value="",this.props.onAddItems(t),this.spinner.current.style.display="initial"}},{key:"render",value:function(){if(void 0!==this.props.unsuccessfulLogin){var e=this.spinner.current;null!==e&&(e.style.display="none")}return o.a.createElement("div",null,o.a.createElement("div",{className:"loginNavbar"},o.a.createElement("form",{onSubmit:this.onSubmitForm,className:"nonMobileForm"},o.a.createElement("div",{className:"form"},o.a.createElement("input",{type:"text",placeholder:"User Name",name:"nameToAdd",className:"inputOne","aria-required":"true","aria-label":"User name for login","aria-describedby":"landingInstructions"}),o.a.createElement("input",{type:"text",placeholder:"Password123!@#",name:"pwToAdd",className:"inputTwo","aria-required":"true","aria-label":"Password for login","aria-describedby":"landingInstructions"}),o.a.createElement("button",{type:"submit"},"Enter"))),o.a.createElement(i.b,{to:"/registration",className:"registration"},o.a.createElement("span",{className:"regText"},"Registration"))),o.a.createElement("div",{className:"page"},o.a.createElement("h1",null,"Web Text"),o.a.createElement("p",{className:"instructions",id:"landingInstructions"},"Application instructions: If you have an account, please enter your name and password to go to the table top. There you can enter the name of a folder, select created folders and make posts for them, select posts, and enter post text. If you do not have an account, please go to registration to create one."),o.a.createElement("div",{id:"landingLoader",ref:this.spinner}),o.a.createElement("form",{onSubmit:this.onSubmitForm,className:"mobileLandingForm"},o.a.createElement("div",{className:"mobileInputs"},o.a.createElement("input",{type:"text",placeholder:"User Name",name:"nameToAdd",className:"inputOne","aria-required":"true","aria-label":"User name for mobile login","aria-describedby":"landingInstructions"}),o.a.createElement("input",{type:"text",placeholder:"Password123!@#",name:"pwToAdd",className:"inputTwo","aria-required":"true","aria-label":"Password for mobile login","aria-describedby":"landingInstructions"}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Enter")))))}}]),a}(o.a.Component)),b=(a(34),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSubmitForm=n.onSubmitForm.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"onSubmitForm",value:function(e){e.preventDefault();var t=[];t.push(e.target.nameToAdd.value),t.push(e.target.pwToAdd.value),e.target.nameToAdd.value="",e.target.pwToAdd.value="",this.props.onAddItems(t)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"regNavbar"},o.a.createElement("form",{onSubmit:this.onSubmitForm,className:"regNonMobileForm"},o.a.createElement("div",{className:"regForm"},o.a.createElement("input",{type:"text",placeholder:"User Name",name:"nameToAdd",className:"regInputOne","aria-required":"true","aria-label":"User name for registration","aria-describedby":"registrationInstructions"}),o.a.createElement("input",{type:"text",placeholder:"Password123!@#",name:"pwToAdd",className:"regInputTwo","aria-required":"true","aria-label":"Password for registration","aria-describedby":"registrationInstructions"}),o.a.createElement("button",{type:"submit"},"Enter"))),o.a.createElement(i.b,{to:"/landing",className:"landingLink"},o.a.createElement("span",{className:"landingLinkText"},"Login"))),o.a.createElement("div",{className:"regPage"},o.a.createElement("h1",{className:"regHeadingOne"},"Registration"),o.a.createElement("p",{className:"regInstructions",id:"registrationInstructions"},"In order to register, please enter a user name and a password. The password should be longer than eight characters long. Also it must contain one upper case and one lower case character, one number, and a special character."),o.a.createElement("form",{onSubmit:this.onSubmitForm},o.a.createElement("div",{className:"regMobileInputs"},o.a.createElement("input",{type:"text",placeholder:"User Name",name:"nameToAdd",className:"regInputOne","aria-required":"true","aria-label":"User name for mobile registration","aria-describedby":"registrationInstructions"}),o.a.createElement("input",{type:"text",placeholder:"Password123!@#",name:"pwToAdd",className:"regInputTwo","aria-required":"true","aria-label":"Password for mobile registration","aria-describedby":"registrationInstructions"}),o.a.createElement("button",{type:"submit",className:"regButton"},"Enter")))))}}]),a}(o.a.Component)),f=(a(35),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSubmitForm=n.onSubmitForm.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"onSubmitForm",value:function(e){e.preventDefault();var t=[];""===e.target.noteName.value||""===e.target.noteText.value?console.log("Cannot create an empty note"):(t.push(e.target.noteName.value),t.push(e.target.noteText.value),e.target.noteName.value="",e.target.noteText.value="",this.props.noteDetail(t))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.onSubmitForm},o.a.createElement("span",{className:"noteForm"},o.a.createElement("input",{type:"text",placeholder:"Weather",name:"noteName",className:"noteTitle","aria-required":"true","aria-label":"Post name input"}),o.a.createElement("textarea",{name:"noteText",placeholder:"Enter note text here"}),o.a.createElement("input",{type:"submit",className:"submit","aria-required":"true","aria-label":"Post name input button"}))))}}]),a}(o.a.Component)),N=(a(36),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).listenEditFolder=n.listenEditFolder.bind(Object(c.a)(n)),n.listenDeleteFolder=n.listenDeleteFolder.bind(Object(c.a)(n)),n.listenCreateNote=n.listenCreateNote.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"listenEditFolder",value:function(e){e.preventDefault(),this.props.listenEditFolder(this.props.folderID)}},{key:"listenDeleteFolder",value:function(e){e.preventDefault(),this.props.deleteFolder(this.props.folderID)}},{key:"listenCreateNote",value:function(e){e.preventDefault(),this.props.createNote(this.props.folderID)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("a",{href:"#",onClick:this.listenEditFolder,className:"edit"},o.a.createElement("span",{className:"editFolderText"},"Edit folder")),o.a.createElement("span",null," | "),o.a.createElement("a",{href:"#",onClick:this.listenDeleteFolder,className:"delete"},o.a.createElement("span",{className:"deleteFolderText"},"Delete folder")),o.a.createElement("span",null," | "),o.a.createElement("a",{href:"#",onClick:this.listenCreateNote,className:"create"},o.a.createElement("span",{className:"createNoteText"},"Create post")))}}]),a}(o.a.Component)),E=(a(37),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={selectedFolderID:null,folderIDToEdit:null,noteIDToEdit:null},n.handleFolderLink=n.handleFolderLink.bind(Object(c.a)(n)),n.handleNoteLink=n.handleNoteLink.bind(Object(c.a)(n)),n.handleEditFolderClick=n.handleEditFolderClick.bind(Object(c.a)(n)),n.listenEditFolderEnter=n.listenEditFolderEnter.bind(Object(c.a)(n)),n.createNote=n.createNote.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"createNote",value:function(e){this.setState({selectedFolderID:null}),this.props.createNote(e)}},{key:"handleEditFolderClick",value:function(e){this.setState({folderIDToEdit:e})}},{key:"handleFolderLink",value:function(e){e.preventDefault();var t=parseInt(e.target.getAttribute("data-folderid"));this.setState({selectedFolderID:t})}},{key:"handleNoteLink",value:function(e){e.preventDefault();var t=parseInt(e.target.getAttribute("data-noteid")),a=e.target.getAttribute("data-notefolder");this.props.onNoteClick(t,a)}},{key:"listenEditFolderEnter",value:function(e){e.preventDefault();var t=e.target.folderEnter.value,a=this.state.folderIDToEdit;e.target.folderEnter.value="",this.props.editFolder(t,a),this.setState({folderIDToEdit:null})}},{key:"render",value:function(){var e=[],t=this.props.items;for(var a in t)if(0!==t[a].folderName.length){e.push(o.a.createElement("li",null,o.a.createElement("div",{className:"folderAndNotes"},this.state.folderIDToEdit===t[a].folderID?o.a.createElement("form",{onSubmit:this.listenEditFolderEnter},o.a.createElement("input",{type:"text",name:"folderEnter",placeholder:t[a].folderName,"aria-required":"true","aria-label":"Edit folder name"}),o.a.createElement("input",{type:"submit",style:{display:"none"}})):o.a.createElement("a",{href:"#",onClick:this.handleFolderLink,"data-folderID":t[a].folderID,className:"folderName"},t[a].folderName),null===this.state.folderIDToEdit&&this.state.selectedFolderID===t[a].folderID?o.a.createElement(N,{folderID:t[a].folderID,deleteFolder:this.props.deleteFolder,listenEditFolder:this.handleEditFolderClick,createNote:this.createNote}):o.a.createElement("span",null))));for(var n=0;n<t[a].notes.length;n++)null!==t[a].notes[n].noteID&&e.push(o.a.createElement("li",{className:"note"},o.a.createElement("a",{href:"#",onClick:this.handleNoteLink,"data-noteid":t[a].notes[n].noteID,"data-notefolder":t[a].notes[n].noteFolder,className:"notes"},t[a].notes[n].noteName)))}return o.a.createElement("div",null,o.a.createElement("ul",{className:"listStyle"},e))}}]),a}(o.a.Component)),v=(a(38),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={folderIDForNoteCreation:null,selectedNoteID:null,noteIDToEdit:null,noteNameIDToEdit:null,value:""},n.editFolder=n.editFolder.bind(Object(c.a)(n)),n.deleteFolder=n.deleteFolder.bind(Object(c.a)(n)),n.createNote=n.createNote.bind(Object(c.a)(n)),n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.onButtonClick=n.onButtonClick.bind(Object(c.a)(n)),n.onNoteClick=n.onNoteClick.bind(Object(c.a)(n)),n.combineFolderIDNoteDetail=n.combineFolderIDNoteDetail.bind(Object(c.a)(n)),n.handleNoteTextLink=n.handleNoteTextLink.bind(Object(c.a)(n)),n.handleNoteNameLink=n.handleNoteNameLink.bind(Object(c.a)(n)),n.listenEditNote=n.listenEditNote.bind(Object(c.a)(n)),n.listenDeleteNote=n.listenDeleteNote.bind(Object(c.a)(n)),n.listenEditNoteName=n.listenEditNoteName.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.listenForTableTopReady()}},{key:"handleChange",value:function(e){this.setState({value:e.target.value,folderIDForNoteCreation:null})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=[];t.push(e.target.folder.value),e.target.folder.value="",this.props.createFolder(t),this.setState({folderIDForNoteCreation:null})}},{key:"editFolder",value:function(e,t){this.setState({folderIDForNoteCreation:null}),this.props.editFolder(e,t)}},{key:"deleteFolder",value:function(e){this.setState({folderIDForNoteCreation:null,selectedNoteID:null}),this.props.deleteFolder(e)}},{key:"onButtonClick",value:function(e){e.preventDefault(),this.props.onLogoutClick(),this.setState({folderIDForNoteCreation:null})}},{key:"createNote",value:function(e){this.setState({folderIDForNoteCreation:e,selectedNoteID:null})}},{key:"onNoteClick",value:function(e,t){this.setState({selectedNoteID:e,folderIDForNoteCreation:null})}},{key:"noteName",value:function(){var e=this.props.foldersAndNotesToLoad,t=[];if(void 0===e||void 0===e[0])return null;for(var a in e)for(var n in e[a].notes)e[a].notes[n].noteID===this.state.selectedNoteID&&null!==this.state.selectedNoteID&&t.push(o.a.createElement("div",null,this.state.noteNameIDToEdit===e[a].notes[n].noteID?o.a.createElement("form",{onSubmit:this.handleNoteNameLink},o.a.createElement("input",{type:"text",name:"noteNameEnter",placeholder:e[a].notes[n].noteName,className:"postNameLink","aria-required":"true","aria-label":"Edit post name "}),o.a.createElement("input",{type:"submit","aria-required":"true","aria-label":"Edit post name keyboard enter",style:{display:"none"}})):o.a.createElement("a",{href:"#",onClick:this.listenEditNoteName,"data-noteid":e[a].notes[n].noteID,"data-notefolder":e[a].notes[n].noteFolder,className:"noteView"},e[a].notes[n].noteName)));return t}},{key:"noteContent",value:function(){var e=this.props.foldersAndNotesToLoad,t=[];if(void 0===e||void 0===e[0])return null;for(var a in e)for(var n in e[a].notes)e[a].notes[n].noteID===this.state.selectedNoteID&&null!==this.state.selectedNoteID&&t.push(o.a.createElement("p",null,this.state.noteIDToEdit===e[a].notes[n].noteID?o.a.createElement("form",{onSubmit:this.handleNoteTextLink},o.a.createElement("textarea",{type:"text",name:"noteEnter",placeholder:e[a].notes[n].noteText,value:this.state.value,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",className:"noteEnterButton","aria-required":"true","aria-label":"Edit post text"})):o.a.createElement("div",{className:"noteDisplayed"},o.a.createElement("a",{href:"#",onClick:this.listenEditNote,"data-noteid":e[a].notes[n].noteID,"data-notefolder":e[a].notes[n].noteFolder,className:"noteTextView"},e[a].notes[n].noteText),o.a.createElement("div",{className:"postDeleteLink"},o.a.createElement("a",{href:"#",onClick:this.listenDeleteNote,"data-noteid":e[a].notes[n].noteID,className:"noteDelete"},"Delete note")))));return t}},{key:"listenEditNote",value:function(e){e.preventDefault();var t,a=parseInt(e.target.getAttribute("data-noteid")),n=this.props.foldersAndNotesToLoad;for(var o in n)for(var r in n[o].notes)a===n[o].notes[r].noteID&&(t=n[o].notes[r].noteText);this.setState({noteIDToEdit:a,value:t})}},{key:"listenEditNoteName",value:function(e){e.preventDefault();var t=parseInt(e.target.getAttribute("data-noteid"));this.setState({noteNameIDToEdit:t})}},{key:"handleNoteTextLink",value:function(e){e.preventDefault();var t=e.target.noteEnter.value;e.target.noteEnter.value="",this.props.editNote(t,this.state.noteIDToEdit),this.setState({noteIDToEdit:null})}},{key:"handleNoteNameLink",value:function(e){e.preventDefault();var t=e.target.noteNameEnter.value;e.target.noteNameEnter.value="",this.props.editNoteName(t,this.state.noteNameIDToEdit),this.setState({noteNameIDToEdit:null})}},{key:"combineFolderIDNoteDetail",value:function(e){if(null!==this.state.folderIDForNoteCreation){var t=[this.state.folderIDForNoteCreation,e];this.props.noteDetail(t),this.setState({folderIDForNoteCreation:null})}}},{key:"listenDeleteNote",value:function(e){e.preventDefault();var t=parseInt(e.target.getAttribute("data-noteid"));this.props.deleteNote(t)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"tableTopNavbar"},o.a.createElement("button",{type:"submit",onClick:this.onButtonClick,className:"logOutButton"},"Logout"),o.a.createElement(i.b,{to:"/account",className:"accountLink"},o.a.createElement("span",{className:"accountLinkText"},"Account"))),o.a.createElement("h1",{className:"tableTopHeading"},"Table Top"),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"sidebar"},o.a.createElement("form",{onSubmit:this.handleSubmit,className:"sidebarInput"},o.a.createElement("input",{type:"text",name:"folder",placeholder:"Enter folder name",className:"folderNameInput","aria-required":"true","aria-label":"Folder name input"}),o.a.createElement("input",{className:"buttonToHide",type:"submit",value:"Submit","aria-required":"true","aria-label":"Folder name input button"})),o.a.createElement(E,{createNote:this.createNote,editFolder:this.editFolder,editNote:this.editNote,deleteFolder:this.deleteFolder,items:this.props.foldersAndNotesToLoad,onNoteClick:this.onNoteClick})),o.a.createElement("div",{className:"textview"},null!==this.state.folderIDForNoteCreation&&o.a.createElement(f,{noteDetail:this.combineFolderIDNoteDetail}),this.noteName(),this.noteContent())))}}]),a}(o.a.Component)),y=(a(39),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSubmitForm=n.onSubmitForm.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"onSubmitForm",value:function(e){e.preventDefault();var t=[];t.push(e.target.nameToAdd.value),t.push(e.target.pwToAdd.value),e.target.nameToAdd.value="",e.target.pwToAdd.value="",this.props.onAddItems(t)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"accountNavbar"},o.a.createElement("form",{onSubmit:this.onSubmitForm,className:"nonMobileAccountFormOne"},o.a.createElement("div",{className:"nonMobileAccountFormTwo"},o.a.createElement("input",{type:"text",placeholder:"User Name",name:"nameToAdd",className:"accountInputOne","aria-required":"true","aria-label":"User name for account deletion","aria-describedby":"accountInstructions"}),o.a.createElement("input",{type:"text",placeholder:"Password123!@#",name:"pwToAdd",className:"accountInputTwo","aria-required":"true","aria-label":"Password for account deletion","aria-describedby":"accountInstructions"}),o.a.createElement("button",{type:"submit"},"Enter"))),o.a.createElement(i.b,{to:"/tableTop",className:"tableTopLink"},o.a.createElement("span",{className:"tableTopLinkText"},"Table Top"))),o.a.createElement("div",{className:"accountPage"},o.a.createElement("h1",{className:"accountHeading"},"Account"),o.a.createElement("p",{className:"accountInstructions",id:"accountInstructions"},"Enter the username and password to delete the account."),o.a.createElement("form",{onSubmit:this.onSubmitForm,className:"mobileAccountForm"},o.a.createElement("div",{className:"mobileAccountInputs"},o.a.createElement("input",{type:"text",placeholder:"User Name",name:"nameToAdd",className:"inputOne","aria-required":"true","aria-label":"User name for mobile account deletion","aria-describedby":"accountInstructions"}),o.a.createElement("input",{type:"text",placeholder:"Password123!@#",name:"pwToAdd",className:"inputTwo","aria-required":"true","aria-label":"Password for mobile account deletion","aria-describedby":"accountInstructions"}),o.a.createElement("button",{type:"submit",className:"accountButton"},"Enter")))))}}]),a}(o.a.Component)),T=(a(40),"https://radiant-thicket-42053.herokuapp.com"),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={unsuccessfulLogin:void 0,password:void 0,authToken:void 0,accountDeleted:!1,registrationMessage:void 0,foldersAndNotes:void 0,notesToView:void 0,folderCreated:!1,folderEdited:!1,folderDeleted:!1,noteCreated:!1,noteViewed:!1,notes:void 0,noteEdited:!1,noteNameEdited:!1,noteDeleted:!1,userID:void 0},n.handleLogin=n.handleLogin.bind(Object(c.a)(n)),n.handleRegistration=n.handleRegistration.bind(Object(c.a)(n)),n.handleAccount=n.handleAccount.bind(Object(c.a)(n)),n.handleTableTopReady=n.handleTableTopReady.bind(Object(c.a)(n)),n.handleCreateFolder=n.handleCreateFolder.bind(Object(c.a)(n)),n.handleEditFolder=n.handleEditFolder.bind(Object(c.a)(n)),n.handleDeleteFolder=n.handleDeleteFolder.bind(Object(c.a)(n)),n.handleCreateNote=n.handleCreateNote.bind(Object(c.a)(n)),n.handleViewNote=n.handleViewNote.bind(Object(c.a)(n)),n.handleEditNote=n.handleEditNote.bind(Object(c.a)(n)),n.handleEditNoteName=n.handleEditNoteName.bind(Object(c.a)(n)),n.handleDeleteNote=n.handleDeleteNote.bind(Object(c.a)(n)),n.handleLogout=n.handleLogout.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"makeBasicAuthToken",value:function(e,t){return window.btoa("".concat(e,":").concat(t))}},{key:"handleLogin",value:function(e){var t=this,a=this.makeBasicAuthToken(e[0],e[1]),n="".concat(T,"/login"),o=e[0],r=e[1];if(""===o||""===r)console.log("Must enter user information");else{var l={userName:o,password:r,authToken:a},i={method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}};fetch(n,i).then((function(e){e.ok?(t.setState({authToken:a}),t.props.history.push("/tableTop")):(alert("Invalid login credentials. Please try again."),t.setState({unsuccessfulLogin:!0}))}))}}},{key:"handleLogout",value:function(){this.setState({authToken:void 0})}},{key:"handleRegistration",value:function(e){var t=this,a="".concat(T,"/registration"),n={userName:e[0],password:e[1]},o={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}};fetch(a,o).then((function(a){if(!a.ok)throw new Error("An error occurred");t.setState({registrationMessage:e.registrationMessage})})).catch((function(e){console.log(e),alert("Invalid registration credentials. Please try again.")}))}},{key:"handleCreateFolder",value:function(e){var t=this,a="".concat(T,"/createFolder"),n={folderName:e[0]},o={method:"POST",body:JSON.stringify(n),headers:{Authorization:this.state.authToken,"Content-Type":"application/json"}};fetch(a,o).then((function(e){if(!e.ok)throw new Error("An error occurred");return e.json()})).then((function(e){t.setState({folderCreated:!0}),t.handleTableTopReady()}))}},{key:"handleEditFolder",value:function(e,t){var a=this,n={newFolderName:e,folderID:t},o="".concat(T,"/editFolder/").concat(t),r={method:"PATCH",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}};fetch(o,r).then((function(e){if(!e.ok)throw new Error("An error occurred");return e.json()})).then((function(e){a.setState({folderEdited:!0}),a.handleTableTopReady()}))}},{key:"handleDeleteFolder",value:function(e){var t=this,a={folderID:e},n="".concat(T,"/deleteFolder"),o={method:"DELETE",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}};fetch(n,o).then((function(e){if(!e.ok)throw new Error("An error occurred");return e.json()})).then((function(e){t.setState({folderDeleted:!0}),t.handleTableTopReady()}))}},{key:"handleCreateNote",value:function(e){var t=this,a={folderID:e[0],noteName:e[1][0],noteText:e[1][1]},n="".concat(T,"/createNote"),o={method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}};fetch(n,o).then((function(e){if(!e.ok)throw new Error("An error occurred");return e.json()})).then((function(e){t.setState({noteCreated:!0}),t.handleTableTopReady()}))}},{key:"handleViewNote",value:function(e){var t=this,a="".concat(T,"/viewNote/").concat(e);fetch(a,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("An error occurred");return e.json()})).then((function(e){t.setState({noteToView:e[0]}),t.handleTableTopReady()}))}},{key:"handleEditNote",value:function(e,t){var a=this,n={noteText:e,noteID:t},o="".concat(T,"/editNote"),r={method:"PATCH",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}};fetch(o,r).then((function(e){if(!e.ok)throw new Error("An error occurred");return e.json()})).then((function(e){a.setState({noteEdited:!0}),a.handleTableTopReady()}))}},{key:"handleEditNoteName",value:function(e,t){var a=this,n={noteName:e,noteID:t},o="".concat(T,"/editNoteName"),r={method:"PATCH",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}};fetch(o,r).then((function(e){if(!e.ok)throw new Error("An error occurred");return e.json()})).then((function(e){a.setState({noteNameEdited:!0}),a.handleTableTopReady()}))}},{key:"handleDeleteNote",value:function(e){var t=this,a={noteID:e},n="".concat(T,"/deleteNote"),o={method:"DELETE",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}};fetch(n,o).then((function(e){if(!e.ok)throw new Error("An error occurred");return e.json()})).then((function(e){t.setState({noteDeleted:e.noteDeleted}),t.handleTableTopReady()}))}},{key:"handleAccount",value:function(e){var t=this,a="".concat(T,"/deleteAccount"),n={userName:e[0],password:e[1]},o={method:"DELETE",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}};fetch(a,o).then((function(e){if(e.ok)return e.json();throw new Error("An error occurred")})).then((function(e){t.setState({accountDeleted:!0,authToken:void 0}),t.handleLogout()})).catch((function(e){alert("Invalid login credentials. Please try again.")}))}},{key:"handleTableTopReady",value:function(){var e=this,t="".concat(T,"/tableTopReady"),a={method:"GET",headers:{Authorization:this.state.authToken,"Content-Type":"application/json"}};fetch(t,a).then((function(e){if(!e.ok)throw new Error("An error occurred");return e.json()})).then((function(t){e.setState({foldersAndNotes:t})}))}},{key:"render",value:function(){var e=this;return void 0===this.state.authToken?o.a.createElement("div",{className:"App"},o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/registration"},o.a.createElement(b,{onAddItems:this.handleRegistration})),o.a.createElement(h.a,null,o.a.createElement(p,{onAddItems:this.handleLogin,unsuccessfulLogin:this.state.unsuccessfulLogin})))):o.a.createElement("div",{className:"App"},o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/account",render:function(t){t.history;return o.a.createElement(y,{onAddItems:e.handleAccount})}}),o.a.createElement(h.a,null,o.a.createElement(v,{listenForTableTopReady:this.handleTableTopReady,foldersAndNotesToLoad:this.state.foldersAndNotes,createFolder:this.handleCreateFolder,editFolder:this.handleEditFolder,deleteFolder:this.handleDeleteFolder,noteDetail:this.handleCreateNote,viewNote:this.handleViewNote,noteToView:this.state.noteToView,editNote:this.handleEditNote,editNoteName:this.handleEditNoteName,deleteNote:this.handleDeleteNote,onLogoutClick:this.handleLogout}))))}}]),a}(o.a.Component),k=Object(h.f)(g);l.a.render(o.a.createElement(i.a,null,o.a.createElement(k,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f820f47e.chunk.js.map