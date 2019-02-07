import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'antd';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    render() {
        return(
            <header id="header">
                <Row>
                    <Col span={16}>
                    </Col>
                    {this.props.user && <Col span={8}>{this.props.user.userName}</Col>}
                </Row>
            </header>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.account.user,
    }
}

export default connect(mapStateToProps)(Header);