import React from 'react';
import { Button } from 'antd';
import './App.css';
import Main from "./components/Main";
import Title from "./components/Title";

const App = () => (
    <div className="App">
        <Button type="primary">Button</Button>
        <Title />
        <Main />
    </div>
);

export default App;