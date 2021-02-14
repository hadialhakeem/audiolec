import React from 'react';
import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Steps from "./components/Steps";

const App = () => (
    <div className="App">
        <Header />
        <Main />
        <Steps />
    </div>
);

export default App;