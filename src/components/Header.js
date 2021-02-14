import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Title>AudioLec</Title>
                <Paragraph >
                    Welcome to AudioLec! Do you want to read what you are listening to? If so, go ahead and upload your audio file!
                </Paragraph>
            </div>
        )
    }
}

export default Header;
