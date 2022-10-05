import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const dataPost = [
  {id: 0, text: "text 1", like: 8},
  {id: 1, text: "text 2", like: 12},
  {id: 2, text: "text 3", like: 4},
  {id: 3, text: "text 4", like: 7},
  {id: 4, text: "text 5", like: 23},
  {id: 5, text: "text 6", like: 11},
];

const dataDialogs = [
  {id: 0, name: "Dima"},
  {id: 1, name: "Helen"},
  {id: 2, name: "Rik"},
  {id: 3, name: "Sarah"},
  {id: 4, name: "Jake"},
  {id: 5, name: "Tom"},
];

const dataText = [
  {id: 0, text: "How old are you?"},
  {id: 1, text: "You are yong men?"},
  {id: 2, text: "What is your name?"},
  {id: 3, text: "Hello my friend!"},
  {id: 4, text: "I think you don`t like this food."},
  {id: 5, text: "Hello everyone!"},
];

const navItem = [
  {id: 0, path: "profile", text: "Profile"},
  {id: 1, path: "dialogs", text: "Messages"},
  {id: 2, path: "news", text: "News"},
  {id: 3, path: "music", text: "Music"},
  {id: 4, path: "settings", text: "Settings"},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App navItem={navItem} dataPost={dataPost} dataDialogs={dataDialogs} dataText={dataText}/>
  </React.StrictMode>
);

