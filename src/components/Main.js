import React from 'react';
import { Result, Button, Spin, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import BackendAPI from "../apis/BackendAPI";

const { Dragger } = Upload;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audioUrl: null,
            loading: null,
            transcript: null,
        };
    }

    handleFileUpload = ({file, filename}) => {
        // https://github.com/react-component/upload#customrequest
        this.setState({loading: true})
        BackendAPI
            .transcribe(file, filename)
            .then(res => {
                const { transcript } = res.data;
                this.setState({transcript})
            })
            .catch(err => {
                console.log({err})
            })
            .finally(()=>{
                this.setState({loading: null})
            })
    }

    render() {
        const { loading } = this.state;

        const props = {
            name: 'file',
            multiple: false,
            customRequest: this.handleFileUpload,
            showUploadList: false,
            onChange(info) {
                const { status } = info.file;
                if (status !== 'uploading') {
                }
                if (status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully.`);
                } else if (status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };

        return (
            <>
                <div>

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
                {loading &&
                <div className="example">
                    <Spin size="large"/>
                    <div className="spinnerText">
                        Transcribing your file...
                    </div>
                </div>
                }
            </>
        )
    }
}

export default Main;
