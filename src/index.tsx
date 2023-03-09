import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 1},
    {id: 2, message: 'It\'s my first post', likesCount: 23}
]

const dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Oleg'}
]

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'Aloha'}
]

ReactDOM.render(
    <App posts={posts} messages={messages} dialogs={dialogs}/>,
  document.getElementById('root')
);