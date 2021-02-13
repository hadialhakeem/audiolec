import React from 'react';
import { Button } from 'antd';
import './App.css';
import Main from "./components/Main";

const App = () => (
    <div className="App">
        <Button type="primary">Button</Button>
        <Main />
    </div>
);

export default App;