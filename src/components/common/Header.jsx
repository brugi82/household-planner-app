import React, {FunctionComponent} from 'react';
import {Row, Col} from 'antd';

const Header = (props) => {
    return(
        <header id="header">
            <Row>
                <Col span={16}>
                </Col>
                <Col span={8}>User</Col>
            </Row>
        </header>
    );
};

export default Header;