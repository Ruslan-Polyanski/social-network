const store = {
  _state: {
    profile: {
      dataPost: [
        {id: 0, text: "text 1", like: 8},
        {id: 1, text: "text 2", like: 12},
        {id: 2, text: "text 3", like: 4},
        {id: 3, text: "text 4", like: 7},
        {id: 4, text: "text 5", like: 23},
        {id: 5, text: "text 6", like: 11},
      ],

      dataText: [
        {id: 0, text: "How old are you?"},
        {id: 1, text: "You are yong men?"},
        {id: 2, text: "What is your name?"},
        {id: 3, text: "Hello my friend!"},
        {id: 4, text: "I think you don`t like this food."},
        {id: 5, text: "Hello everyone!"},
      ],

      dataTextArea: "Write something!"

    },

    messages: {

      dataDialogs: [
        {id: 0, name: "Dima"},
        {id: 1, name: "Helen"},
        {id: 2, name: "Rik"},
        {id: 3, name: "Sarah"},
        {id: 4, name: "Jake"},
        {id: 5, name: "Tom"},
      ],

    },

      navItem: [
        {id: 0, path: "profile", text: "Profile"},
        {id: 1, path: "dialogs", text: "Messages"},
        {id: 2, path: "news", text: "News"},
        {id: 3, path: "music", text: "Music"},
        {id: 4, path: "settings", text: "Settings"},
      ],

      sidebar: {
        friends: [
          {id: 0, name: "Olga"},
          {id: 1, name: "Karina"},
          {id: 2, name: "Laura"}
        ]
      }
    },
    getState(){
      return this._state;
    },
    _stateUpdate() {
      console.log("State updated!")
    },
    changeTextState(writeText) {
      this._state.profile.dataTextArea = writeText;
      this._stateUpdate(this._state)
    },
    addDataPost() {
      const dataPostUser = {
              id: this._state.profile.dataPost.length, 
              text: this._state.profile.dataTextArea, 
              like: Math.floor(Math.random() * 10)
            }
      this._state.profile.dataPost.push(dataPostUser)
      this._state.profile.dataTextArea = "";
      this._stateUpdate(this._state)
    },
    subscribe(observer) {
      this._stateUpdate = observer;
    }
}

export default store;


