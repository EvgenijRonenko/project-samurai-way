import React from 'react';
import './App.css';


function App() {
    return (
        <div className="App">
            App Hello
        </div>
    );
}

type MessageType = {
    message: string
}

const HelloMessage = (props: MessageType) => {
    return <h1>{props.message}</h1>
}

export default App;
