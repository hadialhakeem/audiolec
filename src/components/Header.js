import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Title>AudioLec</Title>
            </div>
        )
    }
}

export default Header;
