import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 1},
    {id: 2, message: 'It\'s my first post', likesCount: 23}
]

ReactDOM.render(
    <App posts={posts}/>,
  document.getElementById('root')
);