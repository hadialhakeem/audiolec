import React from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';


class Steps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="site-card-border-less-wrapper">
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card headStyle ={{color: "#FFFFFF", fontSize: 30}} title="Step 1"  bordered={false} style={{ width: 300, height: 200, color: "#FFFFFF", backgroundColor: "#B6A6CA", fontSize: 20, font: "Segoe UI"  }}>
                        <p>Upload audio file (MP3 or WAV)</p>
                    </Card>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card headStyle ={{color: "#FFFFFF", fontSize: 30}} title="Step 2"  bordered={false} style={{ width: 300, height: 200, color: "#FFFFFF", backgroundColor: "#B6A6CA", fontSize: 20, font: "Segoe UI"  }}>
                        <p>Wait for AudioLec to transcribe your file.</p>
                    </Card>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card headStyle ={{color: "#FFFFFF", fontSize: 30}} title="Step 3"  bordered={false} style={{ width: 300, height: 200, color: "#FFFFFF", backgroundColor: "#B6A6CA", fontSize: 20, font: "Segoe UI"  }}>
                        <p>Download the transcript!</p>
                    </Card>
                </Col>
            </Row>
            </div>
        )
    }
}


export default Steps;

