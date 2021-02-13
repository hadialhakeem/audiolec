import React from 'react';
import { Button } from 'antd';
import './App.css';
import Main from "./components/Main";
import Header from "./components/Title";
import Steps from "./components/Steps";

const App = () => (
    <div className="App">
        <Header />
        <Main />
        <Button type="primary">Button</Button>
        <Steps />
        
    </div>
);

export default App;