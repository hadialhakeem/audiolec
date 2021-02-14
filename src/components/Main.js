import React from 'react';
import {Typography, Switch, Result, Button, Spin, Upload, message} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const { Paragraph, Text } = Typography;

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


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <div>
                    <Paragraph >
                    Welcome to AudioLec! Do you want to read what you are listening to? If so, go ahead and upload your audio file!
                    </Paragraph>
                </div>

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

                <div className="example2">
                    <Result
                        status="success"
                        title="Your transcript is ready!"
                        subTitle="Thank you for using AudioLec."
                        extra={[
                            <Button type="primary" key="download">
                                Download
                            </Button>,
                            <Button key="transcribe">Transcribe Again</Button>,
                        ]}
                    />
                </div>
                <div className="example">
                    <Spin size="large"  />
                    <div className="spinnerText">
                        Transcribing your file...
                    </div>
                </div>
            </>
        )
    }
}

export default Main;
