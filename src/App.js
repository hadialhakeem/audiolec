import React from 'react';
import { Button } from 'antd';
import './App.css';
import Main from "./components/Main";
import Header from "./components/Title";

const App = () => (
    <div className="App">
        <Header />
        <Main />
        <Button type="primary">Button</Button>
        
    </div>
);

export default App;