import React from 'react';
import { Typography, Switch } from 'antd';

const { Paragraph, Text } = Typography;




class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Paragraph >
                Welcome to AudioLec! Do you want to read what you are listening to? If so, go ahead and upload your audio file!
                </Paragraph>
            </div>
        )
    }
}

export default Main;
