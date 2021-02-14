import React from 'react';
import { Button } from 'antd';
import './App.css';
import Main from "./components/Main";
import Header from "./components/Title";
import Steps from "./components/Steps";
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
const App = () => (
    <div className="App">
        <Header />
        <Main />
        <div className="upload">
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag audio file to this area to upload</p>
            // <p className="ant-upload-hint">


            // </p>
        </Dragger>
        </div>
        <Steps />
        
    </div>
);

export default App;