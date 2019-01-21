import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'antd';

class Header extends Component {
    render() {
        return(
            <header id="header">
                <Row>
                    <Col span={16}>
                    </Col>
                    {this.props.user && <Col span={8}>this.props.user.username</Col>}
                </Row>
            </header>
        );
    }
};

const mapStateToProps = (state) => {
    return{
        user:state.user,
    }
}

export default connect(mapStateToProps)(Header);